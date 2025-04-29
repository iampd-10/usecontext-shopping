// components/Categories.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [products, setProducts] = useState({});
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
        // Group products by category name
        const grouped = data.reduce((acc, product) => {
          const categoryName = product.category?.name || "Others";
          if (!acc[categoryName]) acc[categoryName] = [];
          acc[categoryName].push(product);
          return acc;
        }, {});
        setProducts(grouped);
        setStatus("Loaded categories successfully!");
      } catch (error) {
        console.error("Error fetching categories", error);
        setStatus("Error loading categories");
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen w-full py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Browse by Category</h1>
        <p className="text-center text-gray-600 mb-10">{status}</p>

        {/* Categories */}
        {Object.keys(products).length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <div className="space-y-12">
            {Object.entries(products).map(([category, items]) => (
              <div key={category}>
                {/* Category Title */}
                <h2 className="text-2xl font-bold text-indigo-700 mb-6">{category}</h2>

                {/* Products Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {items.slice(0, 4).map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white">
                      <img
                        src={item.images?.[0] || "https://via.placeholder.com/300x300?text=No+Image"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-indigo-600 font-bold mt-2">₹{(item.price * 87).toFixed(0)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
