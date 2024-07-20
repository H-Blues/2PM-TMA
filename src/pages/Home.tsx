import React from "react";
import Nav from "../components/nav";
import honeyLogo from "../assets/honey.svg";
import RegisterTime from "../components/registerTime";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <div className="py-2 w-full relative mt-8">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-yellow-400 rotate-45 m-1"></div>
          <div className="w-12 h-12 bg-black rotate-45 m-1"></div>
          <div className="w-12 h-12 bg-yellow-400 rotate-45 m-1"></div>
          <div className="w-12 h-12 bg-black rotate-45 m-1"></div>
          <div className="w-12 h-12 bg-yellow-400 rotate-45 m-1"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl z-10">Your Score</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full px-4">
        {/* Honey pot icon */}
        <img src={honeyLogo} alt="Honey Pot" className="w-64 h-64 mb-2" />

        {/* Score */}
        <h1 className="text-4xl font-bold mb-8">1000 HONEY</h1>

        {/* Community join section */}
        <div className="bg-gray-100 rounded-lg p-6 w-full max-w-sm mx-auto text-center">
          <h2 className="text-xl font-bold">HONEY COMMUNITY</h2>
          <p className="text-yellow-500 mt-2">Home for telegram OGs</p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-8 rounded-full mt-4 w-full">Join</button>
        </div>
      </div>

      <div className="mt-0">
        <RegisterTime />
      </div>

      <div className="w-full text-center text-gray-400 text-sm mb-20">@honey_bot</div>

      {/* Bottom Navigation */}
      <Nav />
    </div>
  );
};

export default Home;
