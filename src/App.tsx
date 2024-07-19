import React, { useState } from "react";

// Simplified version of the getAge function
const getAge = (id: number): string => {
  const timestamp = (id / 4194304 + 1420070400000) / 1000;
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  const years = Math.floor(diff / 31536000);
  const months = Math.floor((diff % 31536000) / 2592000);
  const days = Math.floor(((diff % 31536000) % 2592000) / 86400);
  return `${years} years, ${months} months, ${days} days`;
};

// Simplified version of the treeify function
const renderTree = (obj: Record<string, any>, header: string): string => {
  const renderObject = (obj: Record<string, any>, indent = ""): string => {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          return `${indent}${key}:\n${renderObject(value, indent + "  ")}`;
        }
        return `${indent}${key}: ${value}`;
      })
      .join("\n");
  };

  return `${header}\n${renderObject(obj, "  ")}`;
};

const App: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const [chatId, setChatId] = useState("");
  const [chatType, setChatType] = useState("");
  const [chatTitle, setChatTitle] = useState("");
  const [chatInfo, setChatInfo] = useState("");

  const getUserInfo = () => {
    const user = {
      id: userId,
      first_name: firstName,
      last_name: lastName,
      username: username,
      created: getAge(parseInt(userId)),
    };

    const renderedTree = renderTree(user, "User Information");
    setUserInfo(renderedTree);
  };

  const getChatInfo = () => {
    const chat = {
      id: chatId,
      type: chatType,
      title: chatTitle,
    };

    const renderedTree = renderTree(chat, "Chat Information");
    setChatInfo(renderedTree);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Information</h2>
      <div>
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={getUserInfo}>Get User Info</button>
      </div>
      <pre>{userInfo}</pre>

      <h2>Chat Information</h2>
      <div>
        <input type="text" placeholder="Chat ID" value={chatId} onChange={(e) => setChatId(e.target.value)} />
        <input type="text" placeholder="Chat Type" value={chatType} onChange={(e) => setChatType(e.target.value)} />
        <input type="text" placeholder="Chat Title" value={chatTitle} onChange={(e) => setChatTitle(e.target.value)} />
        <button onClick={getChatInfo}>Get Chat Info</button>
      </div>
      <pre>{chatInfo}</pre>
    </div>
  );
};

export default App;
