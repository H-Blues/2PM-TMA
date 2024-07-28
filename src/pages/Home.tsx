import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import honeyLogo from "../assets/honey.svg";
import HexagonRow from "../components/hexagonRow";
import LoadingAnimation from "../components/loadingAnimation";
import { API_URLS } from "../config/apiConfig";

import WebApp from "@twa-dev/sdk";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState<string | "">("");
  const [response, setResponse] = useState<string | null>("Join");
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const start_param = WebApp.initDataUnsafe.start_param;
    if (start_param) {
      setInviteCode(start_param);
      console.log("Invite code:", start_param);
    }
  }, []);

  const join = async () => {
    setIsLoading(true);

    const user = WebApp.initDataUnsafe.user;
    if (!user || !user.id) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(API_URLS.CREATE_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telegram_id: user.id.toString(),
          username: user.username,
          invite_code: inviteCode,
        }),
      });

      if (response.status === 201 || response.status === 200) {
        setShowAnimation(true);
        setResponse("Welcome!");
      }

      if (response.status === 400 || response.status === 409) {
        setResponse("Welcome!");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showAnimation && <LoadingAnimation setShowAnimation={setShowAnimation} />}
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
          <img src={honeyLogo} alt="Honey Pot" className="w-48 h-48 mb-1" />

          <h1 className="text-4xl font-bold mb-4">1000 HONEY</h1>

          <div className="bg-gray-100 rounded-lg p-4 w-full max-w-sm mx-auto text-center">
            <h2 className="text-xl font-bold">Data HONEY</h2>
            <p className="text-yellow-500 mt-4">Home for telegram BEEs</p>
            <button
              className={`bg-yellow-400 text-black font-bold py-2 px-8 rounded-full mt-4 w-full ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={join}
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : response}
            </button>
          </div>
        </div>

        <Nav />
      </div>
    </>
  );
};

export default Home;
