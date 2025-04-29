// components/ProductDetails.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { toast } from "react-toastify";
import { useAddToCart } from "../../../../context/Context";

export default function ProductDetails() {
  const {items, setItems} = useAddToCart()
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1 },
  });

  async function fetchProduct() {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load product");
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading product...</p>;
  

  const { title, price, images, category, description } = product;
  const handleBuy = () => {
    if (items.some(product => product.id === Number(id))) {
      toast.error(`${title} is already added`);
    } else {
      setItems([...items, { id: Number(id), title, price, images, category }]);
      toast.success(`${title} has been added to your cart`);
    }
  };
  
  const handleShop= () =>{
    toast.warn(` ${title}is not available at your location`)
  };
  return (
    <section className="bg-white min-h-screen w-screen px-4 py-12">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Carousel */}
        <div ref={sliderRef} className="keen-slider rounded-lg shadow-lg">
          {images?.length > 0 ? (
            images.map((img, index) => (
              <div key={index} className="keen-slider__slide">
                <img
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            ))
          ) : (
            <img
              src="https://via.placeholder.com/500x500?text=No+Image"
              alt="No Image Available"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-indigo-600 font-bold mb-4">₹ {price?.toFixed(2)*87}</p>
          <p className="text-gray-600 mb-6">{description}</p>
          <p className="text-sm text-gray-500 mb-8">Category: {category?.name}</p>

          <div  className="flex flex-wrap gap-4">
            <button onClick={handleShop} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
              Buy Now
            </button>
            <button onClick={handleBuy} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg">
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
