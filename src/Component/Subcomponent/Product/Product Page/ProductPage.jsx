// components/ProductPage.jsx

import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../../../context/Context"; // adjust your path if needed

export default function ProductPage() {
  const { items, setItems } = useAddToCart(); // 👈 hook for cart context
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");

  async function fetchData() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await axios.get(url);
      setProducts(response.data);
      console.log(response.data);
      setStatus("Loaded products successfully");
    } catch (error) {
      console.error(error);
      setStatus("Error fetching data");
      toast.error("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Add to Cart function
  function addToCart(product) {
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setItems(updatedItems);
      toast.success("Increased quantity in cart!");
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
      toast.success("Added to cart!");
    }
  }

  return (
    <section className="bg-white min-h-screen w-screen px-2 py-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Shop Our Collection
        </h2>
        <p className="font-light text-center text-gray-600 mb-8">{status}</p>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
          {products.map((product, i) => {
            const { id, title, price, images, category, description } = product;
            const realPrice = price * 87;

            return (
              <div
                key={i}
                className="border border-gray-200 rounded-lg shadow-sm overflow-hidden transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
              >
                <Link to={`/product/${id}`}>
                  <img
                    src={images?.[0] || "https://via.placeholder.com/300x300?text=No+Image"}
                    alt={title || "Product"}
                    className="w-full h-64 object-cover"
                  />
                </Link>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{category?.name}</p>
                  <p className="mt-2 text-indigo-600 font-bold">₹{realPrice.toFixed(2)}</p>
                  <p className="text-sm mt-2 text-gray-600 line-clamp-2">
                    {description?.slice(0, 60)}...
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
