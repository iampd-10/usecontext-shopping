// components/LoginPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    // Simulate successful login (you can connect API here later)
    toast.success("Login successful!");
    navigate("/"); // redirect to home page
  }

  return (
    <div className="bg-gray-50 min-h-screen w-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white border-2 border-indigo-600 hover:bg-indigo-700 text-indigo-600 hover:text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>

          <div className="flex justify-between text-sm mt-4 text-gray-600">
            <button
              type="button"
              onClick={() => toast.info("Reset password flow coming soon!")}
              className="hover:underline"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")} // If you make a register page later
              className="hover:underline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
