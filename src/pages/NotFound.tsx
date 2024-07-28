import React from "react";
import honeyLogo from "../assets/honey.svg";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Data Honey</h2>
      <img src={honeyLogo} alt="Logo" className="w-48 h-48 mb-4" />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl mb-8 text-gray-600">Oops! Page not found.</p>
    </div>
  );
};

export default NotFoundPage;
