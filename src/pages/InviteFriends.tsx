import React from "react";
import Nav from "../components/nav";
import honeyLogo from "../assets/honey.svg";

const InviteFriends: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Invite friends <br /> and get more HONEY
      </h1>

      <img src={honeyLogo} alt="Honey" className="w-40 h-40 mb-4" />

      <p className="text-lg text-center mb-6">Tap on the button to invite your friends</p>

      <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-yellow-600 transition duration-300">
        Invite friends
      </button>

      <Nav />
    </div>
  );
};

export default InviteFriends;
