import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div 
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center " 
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/28/7f/f1/287ff11a79e178ed814c6f6045d7c2af.jpg')" }}
    >
      <div className="bg-backdrop-blur-lg  bg-opacity-80 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-100 mb-2">Page Not Found</h2>
        <p className="text-gray-100 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
