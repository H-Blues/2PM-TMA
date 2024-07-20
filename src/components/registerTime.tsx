import React, { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import getAge from "./idage";

const getAgeString = (uid: number): string => {
  const createDate = getAge(uid);
  return `${createDate[0]} ${createDate[1]}`;
};

const RegisterTime: React.FC = () => {
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
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">Registration Time:</p>
        <p className="text-lg">{registrationTime || "Loading..."}</p>
      </div>
    </div>
  );
};

export default RegisterTime;
