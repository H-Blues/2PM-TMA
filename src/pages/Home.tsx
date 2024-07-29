import React, { useState, useEffect, useMemo, useCallback } from "react";
import Nav from "../components/nav";
import honeyLogo from "../assets/honey.svg";
import HexagonRow from "../components/hexagonRow";
import LoadingAnimation from "../components/loadingAnimation";
import CelebrationAnimation from "../components/celebrationAnimation";
import CounterAnimation from "../components/counterAnimation";
import { getCreationYear } from "../components/idage";
import { API_URLS } from "../config/apiConfig";

import WebApp from "@twa-dev/sdk";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>("Join");
  const [score, setScore] = useState<number>(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  const MemoizedHexagonRow = useMemo(() => <HexagonRow />, []);
  const telegramData = WebApp.initDataUnsafe;

  useEffect(() => {
    getUserScore(telegramData.user?.id);
    setShowCounter(true);

    // const creationYear = getCreationYear(telegramData.user?.id);
    // const isPremium = telegramData.user?.is_premium ? true : false;
    // console.log("User:", telegramData.user);
    // console.log("Creation:", creationYear);
    // console.log("Premium:", isPremium);
    // console.log("Invite code:", telegramData.start_param);
  }, [telegramData]);

  const getUserScore = useCallback(
    async (id: any) => {
      const response = await fetch(`${API_URLS.GET_USER}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setScore(data.points);
      }
    },
    [telegramData]
  );

  const join = useCallback(async () => {
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
          creation_year: getCreationYear(telegramData.user?.id),
          is_premium: telegramData.user?.is_premium ? true : false,
          invite_code: telegramData.start_param,
        }),
      });

      if (response.status === 201 || response.status === 200 || response.status === 400) {
        setShowAnimation(true);
        setResponse("Welcome!");
        getUserScore(telegramData.user?.id);
      }

      if (response.status === 409) {
        setResponse("Welcome!");
        getUserScore(telegramData.user?.id);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [telegramData, getUserScore]);

  const handleAnimationComplete = useCallback(() => {
    setShowAnimation(false);
    setShowCelebration(true);
  }, []);

  const handleCelebrationComplete = useCallback(() => {
    setShowCelebration(false);
  }, []);

  return (
    <>
      {showAnimation && <LoadingAnimation onComplete={handleAnimationComplete} />}
      {showCelebration && <CelebrationAnimation onComplete={handleCelebrationComplete} score={score} />}
      <div className="flex flex-col min-h-screen w-full bg-white">
        <div className="w-full relative mt-6">
          <div className="flex justify-center">{MemoizedHexagonRow}</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl z-10">Your Score</span>
          </div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center w-full mb-16">
          <img src={honeyLogo} alt="Honey Pot" className="w-48 h-48 mb-1" />

          <h1 className="text-4xl font-bold mb-4">
            {showCounter ? <CounterAnimation end={score} duration={300} /> : score} {" HONEY"}
          </h1>

          <div className="bg-gray-100 rounded-lg p-4 w-full max-w-sm mx-auto text-center">
            <h2 className="text-xl font-bold">DATA HONEY</h2>
            <p className="text-yellow-500 mt-2">
              The first <b>FHE</b> Telegram Miniapp.
            </p>
            <button
              className={`bg-yellow-400 text-black font-bold py-2 px-8 rounded-full mt-2 w-full ${
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
