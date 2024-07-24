import React, { useState } from "react";
import Nav from "../components/nav";
import honeyLogo from "../assets/honey.svg";
import HexagonRow from "../components/hexagonRow";
// import RegisterTime from "../components/registerTime";

import WebApp from "@twa-dev/sdk";

const Home: React.FC = () => {
  const [msg, setMsg] = useState("Hi");

  const join = () => {
    setMsg(JSON.stringify(WebApp.initDataUnsafe.user?.id));
    WebApp.sendData(JSON.stringify(WebApp.initDataUnsafe.user?.id));
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <div className="w-full relative mt-6">
        <div className="flex justify-center">
          <HexagonRow />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl z-10">Your Score</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full mb-16">
        {/* Honey pot icon */}
        <img src={honeyLogo} alt="Honey Pot" className="w-48 h-48 mb-1" />

        {/* Score */}
        <h1 className="text-4xl font-bold mb-4">1000 HONEY</h1>

        {/* Community join section */}
        <div className="bg-gray-100 rounded-lg p-4 w-full max-w-sm mx-auto text-center">
          <h2 className="text-xl font-bold">HONEY COMMUNITY</h2>
          <p className="text-yellow-500 mt-4">Home for telegram OGs</p>
          <p className="text-black">{msg}</p>
          <button className="bg-yellow-400 text-black font-bold py-2 px-8 rounded-full mt-4 w-full" onClick={join}>
            Join
          </button>
        </div>
      </div>

      {/* <div className="mt-0">
        <RegisterTime />
      </div> */}

      {/* Bottom Navigation */}
      <Nav />
    </div>
  );
};

export default Home;
