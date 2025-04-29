import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi"; // using react-icons
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAddToCart } from "../../../context/Context";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useAddToCart();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Categories", path: "/categories" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className=" top-0 z-50 bg-gray-200 w-full">
      <div className="w-full mx-auto flex items-center justify-between  px-4 py-3 md:py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-indigo-600 bg-transparent cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          iampd10
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-20 font-medium text-gray-700">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                ` border-b-1  button-shadow  transition-all duration-200 ${
                  isActive
                    ? "text-indigo-700 border-b-2 border-indigo-600"
                    : "hover:text-indigo-600 border-transparent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center  space-x-4">
          <NavLink to="/cart" className="relative ">
            <FiShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 text-xs bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          </NavLink>

          <NavLink to="/login" className="relative ">
            <FiUser className="h-6 w-6 text-gray-700" />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6 text-gray-700" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className={`text-left transition-colors ${
                  isActive(item.path)
                    ? "text-indigo-600 font-semibold"
                    : "hover:text-indigo-600"
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
