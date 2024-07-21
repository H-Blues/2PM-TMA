import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Quest from "./pages/Quest";
import InviteFriends from "./pages/InviteFriends";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/friends" element={<InviteFriends />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
