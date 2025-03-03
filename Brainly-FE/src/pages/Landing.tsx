import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/public/landing.png')" }}>
      
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative text-center flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-white text-6xl font-extrabold mb-10 animate-fade-in">
          Second Brain
        </h1>

        {/* Buttons */}
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/signin")}
            className="px-8 py-3 text-lg font-semibold text-white bg-blue-500 bg-opacity-80 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 text-lg font-semibold text-white bg-gray-500 bg-opacity-80 rounded-lg shadow-lg hover:bg-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
