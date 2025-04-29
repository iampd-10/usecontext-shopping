// components/Footer.jsx

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Categories", path: "/categories" },
  ];

  const social = [
    { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, link: "https://instagram.com" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com" },
    { name: "YouTube", icon: FaYoutube, link: "https://youtube.com" },
  ];

  return (
    <div className="bg-gray-200 text-gray-700">
      <div className="w-full  mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-indigo-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            iampd10
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-indigo-600 transition-colors ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {social.map(({ name, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} iampd10. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-indigo-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
