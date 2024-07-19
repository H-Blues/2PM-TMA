import React, { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import getAge from "./idage";

const getAgeString = (uid: number): string => {
  const createDate = getAge(uid);
  return `${createDate[0]} ${createDate[1]}`;
};

const App: React.FC = () => {
  const [registrationTime, setRegistrationTime] = useState<string>("");

  useEffect(() => {
    const userId = WebApp.initDataUnsafe.user?.id;
    if (userId !== undefined) {
      setRegistrationTime(getAgeString(userId));
    } else {
      setRegistrationTime("User ID not available");
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Registration Time</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Registration Time:</h2>
        <p className="text-lg">{registrationTime || "Loading..."}</p>
      </div>
    </div>
  );
};

export default App;
