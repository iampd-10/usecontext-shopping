// components/Hero.jsx

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 w-full h-full">
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-20 md:py-32 gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover the Latest Trends
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Shop the newest arrivals and find your perfect style at unbeatable prices.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/shop")}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/1200x/be/dd/6c/bedd6c74f995f8cc3b30e6bf02fa0675.jpg"
            alt="Shopping banner"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
