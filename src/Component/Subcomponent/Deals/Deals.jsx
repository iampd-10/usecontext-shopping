// components/Deals.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Deals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
        // Get first 8 products or filter deals by price if you want
        const bestDeals = data
          .filter(product => product.price < 50) // Only products with price < 50
          .slice(0, 8); // Limit to 8 best deals
        setDeals(bestDeals);
        console.log(bestDeals)
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    }
    fetchDeals();
  }, []);

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">🔥 Best Deals of the Week 🔥</h2>
        <p className="text-gray-600 mb-10 text-lg">Grab the hottest products at unbeatable prices! Limited time only.</p>

        {/* Deals Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {deals.map((deal) => {
            const { id, title, price, images } = deal;
            return (
              <div key={id} className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white">
                <Link to={`/product/${id}`}>
                  <img
                    src={images?.[0] || "https://via.placeholder.com/300x300?text=No+Image"}
                    alt={title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-indigo-600 font-bold text-xl mt-2">₹{(price * 87).toFixed(0)}</p>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                      <ShoppingCart className="h-5 w-5" />
                      Shop Now
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
