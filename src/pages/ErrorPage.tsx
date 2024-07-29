import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.png";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Honey</h2>
      <img src={error} alt="error" className="w-48 h-48 mb-4" />
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Oops! Something went wrong</h1>
      <p className="text-xl mb-8 text-gray-600 text-center">We're sorry, but an unexpected error occurred.</p>
      <Link to="/" className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
