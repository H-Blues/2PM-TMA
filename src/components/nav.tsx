import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Award, ClipboardList, Users } from "lucide-react";

const Nav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <Home size={24} />,
    },
    {
      path: "/leaderboard",
      label: "Leaderboard",
      icon: <Award size={24} />,
    },
    {
      path: "/quest",
      label: "Quest",
      icon: <ClipboardList size={24} />,
    },
    {
      path: "/friends",
      label: "Friends",
      icon: <Users size={24} />,
    },
  ];

  return (
    <div>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center ${
                location.pathname === item.path ? "text-black" : "text-gray-400"
              }`}
            >
              {item.icon}
              <span className="mt-1 text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
