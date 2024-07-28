import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Quest from "./pages/Quest";
import InviteFriends from "./pages/InviteFriends";
import NotFoundPage from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./ErrorBoundary";

const App: React.FC = () => {
  let user;

  try {
    user = WebApp.initDataUnsafe.user;
  } catch (error) {
    console.error("Error initializing WebApp:", error);
    return <ErrorPage />;
  }

  if (!user) {
    return <NotFoundPage />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/quest" element={<Quest />} />
            <Route path="/friends" element={<InviteFriends />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
