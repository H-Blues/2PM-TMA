// Quest.tsx
import React, { useState } from "react";
import QuestList from "../components/questList";
import QuestDetail from "../components/questDetail";
import Nav from "../components/nav";

interface QuestType {
  name: string;
  honey: number;
}

const Quest: React.FC = () => {
  const [selectedQuest, setSelectedQuest] = useState<QuestType | null>(null);

  const handleSelectQuest = (quest: QuestType) => {
    setSelectedQuest(quest);
  };

  const handleBack = () => {
    setSelectedQuest(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {selectedQuest ? (
        <QuestDetail quest={selectedQuest} onBack={handleBack} />
      ) : (
        <QuestList onSelectQuest={handleSelectQuest} />
      )}
      <Nav />
    </div>
  );
};

export default Quest;
