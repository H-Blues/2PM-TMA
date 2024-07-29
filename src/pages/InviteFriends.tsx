import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import honeyLogo from "../assets/honey.svg";
import BottomSheet from "../components/bottomSheet";
import { API_URLS } from "../config/apiConfig";
import WebApp from "@twa-dev/sdk";
import ErrorPage from "./ErrorPage";

const InviteFriends: React.FC = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInviteCode = async () => {
      try {
        const telegramId = WebApp.initDataUnsafe.user?.id;

        const userResponse = await fetch(`${API_URLS.GET_USER}/${telegramId}`);
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user");
        }
        const userData = await userResponse.json();

        const inviteResponse = await fetch(`${API_URLS.GET_INVITE_CODE}/${userData.user_id}`);
        if (!inviteResponse.ok) {
          throw new Error("Failed to fetch invite code");
        }
        const inviteData = await inviteResponse.json();

        setInviteCode(inviteData.invite_code);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInviteCode();
  }, []);

  const handleInviteClick = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Invite friends <br /> and get more HONEY
      </h1>

      <img src={honeyLogo} alt="Honey" className="w-40 h-40 mb-4" />

      <p className="text-lg text-center mb-6">Tap on the button to invite your friends</p>

      <button
        className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-yellow-600 transition duration-300"
        onClick={handleInviteClick}
      >
        Invite friends
      </button>

      {inviteCode && (
        <p className="mt-4 text-center">
          Your invite code: <strong>{inviteCode}</strong>
        </p>
      )}

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        inviteLink={`https://t.me/datahoney_bot/join?startapp=${inviteCode}`}
      />

      <Nav />
    </div>
  );
};

export default InviteFriends;
