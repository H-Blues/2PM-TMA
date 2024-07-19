import React, { useState } from "react";
import WebApp from "@twa-dev/sdk";

const getAge = require("./idage.js");

const getAgeString = (uid: number): string => {
  const createDate = getAge(uid);
  return `${createDate[0]} ${createDate[1]}`;
};

const App: React.FC = () => {
  const userId = WebApp.initDataUnsafe.user?.id;
  const [registrationTime, setRegistrationTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId !== undefined) {
      setRegistrationTime(getAgeString(userId));
    } else {
      setRegistrationTime("User ID not available");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Registration Time</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Get Registration Time
        </button>
      </form>
      {registrationTime && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Registration Time:</h2>
          <p className="text-lg">{registrationTime}</p>
        </div>
      )}
    </div>
  );
};

export default App;
