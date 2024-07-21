import React from "react";
import { Star } from "lucide-react";
import Nav from "../components/nav";
import WebApp from "@twa-dev/sdk";

const Leaderboard: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4">Telegram Wall of Fame</h1>

      <div className="bg-gray-100 rounded-lg p-3 mb-4 flex items-center justify-between">
        <div className="flex items-center ">
          <div className=" bg-gray-300 rounded-full w-10 h-10 mr-3 overflow-hidden">
            <img src={WebApp.initDataUnsafe.user?.photo_url} alt="User" className="rounded-full" />
          </div>
          <div>
            <div className="text-sm text-gray-600">{WebApp.initDataUnsafe.user?.username}</div>
            <div className="font-bold">838 Honey</div>
          </div>
        </div>
        <div className="text-yellow-500 font-bold">#264850</div>
      </div>

      <button className="bg-yellow-500 text-white w-full py-2 rounded-lg flex items-center justify-center mb-4">
        <Star className="mr-2" size={20} />
        Boost Score
      </button>

      <p> {JSON.stringify(WebApp.initDataUnsafe.user)} </p>

      <div className="mb-4">
        <h2 className="font-bold mb-2">25.58M holders</h2>
        <div className="bg-white rounded-lg p-3">
          {[
            { name: "Mike125", honey: "25,646,498", medal: "🥇" },
            { name: "Jennifer33", honey: "24,674,306", medal: "🥈" },
            { name: "Cindy", honey: "23,455,360", medal: "🥉" },
            { name: "Mike", honey: "22,714,567", medal: "#4" },
            { name: "Justine", honey: "21,895,678", medal: "#5" },
          ].map((user, index) => (
            <div key={index} className="flex items-center justify-between mb-2 last:mb-0">
              <div className="flex items-center">
                <div
                  className={`bg-gray-300 rounded-full w-10 h-10 mr-3 ${
                    index in [0, 1, 2] ? "border-2 border-purple-500" : ""
                  }`}
                ></div>
                <div>
                  <div>{user.name}</div>
                  <div className="font-bold">{user.honey} HONEY</div>
                </div>
              </div>
              <div>{user.medal}</div>
            </div>
          ))}
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Leaderboard;
