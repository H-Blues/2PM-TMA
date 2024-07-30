import React from "react";
import { ChevronLeft } from "lucide-react";
import Questions from "./questions";

interface QuestType {
  name: string;
  honey: number;
  pic: string;
}

interface QuestDetailProps {
  quest: QuestType;
  onBack: () => void;
}

const QuestDetail: React.FC<QuestDetailProps> = ({ quest, onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <button onClick={onBack} className="text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h2 className="font-bold">Quest : {quest.name}</h2>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={quest.pic} alt="Quest" className="mr-2 w-16 h-16 rounded-xl" />
          <div>
            <p>
              Reward : <span className="text-yellow-500 font-bold">{quest.honey} Honey</span>
            </p>
          </div>
        </div>
        <Questions quest={quest} />
      </div>
    </div>
  );
};

export default QuestDetail;
