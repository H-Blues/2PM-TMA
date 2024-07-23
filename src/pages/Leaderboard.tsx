import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { InitialsAvatar } from "@twa-dev/mark42";
import Nav from "../components/nav";
import WebApp from "@twa-dev/sdk";

const Leaderboard: React.FC = () => {
  const navigate = useNavigate();

  const handleBoostScore = () => {
    navigate("/quest");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Telegram Wall of Fame</h1>

      <div className="bg-gray-100 rounded-lg p-3 mb-4 flex items-center justify-between">
        <div className="flex items-center ">
          <div className=" bg-gray-300 rounded-full w-10 h-10 mr-3 overflow-hidden">
            {WebApp.initDataUnsafe.user && (
              <InitialsAvatar
                entityId={WebApp.initDataUnsafe.user?.id}
                entityName={WebApp.initDataUnsafe.user?.first_name}
                theme="apple"
                className="MyAvatar"
              />
            )}
          </div>
          <div>
            <div className="text-sm text-gray-600">
              {WebApp.initDataUnsafe.user?.first_name + " " + WebApp.initDataUnsafe.user?.last_name}
            </div>
            <div className="font-bold">838 Honey</div>
          </div>
        </div>
        <div className="text-yellow-500 font-bold">#264850</div>
      </div>

      <button
        className="bg-yellow-500 text-white w-full py-2 rounded-lg flex items-center justify-center mb-4"
        onClick={handleBoostScore}
      >
        <Star className="mr-2" size={20} />
        Boost Score
      </button>

      {/* <div className="w-full mt-6 px-4">
        <p className="text-sm break-words whitespace-pre-wrap overflow-hidden">
          {JSON.stringify(WebApp.initDataUnsafe.user, null, 2)}
        </p>
      </div> */}

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
                  className={`rounded-full w-11 h-11 mr-3 ${index in [0, 1, 2] ? "border-2 border-yellow-500" : ""}`}
                >
                  <InitialsAvatar entityId={index} entityName={user.name} theme="apple" className="MyAvatar" />
                </div>
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
