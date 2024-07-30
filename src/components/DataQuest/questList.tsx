import React from "react";
import HexagonRow from "../hexagonRow";
import { Quest, quests } from "./questData";

interface QuestListProps {
  onSelectQuest: (quest: Quest) => void;
}

const QuestList: React.FC<QuestListProps> = ({ onSelectQuest }) => {
  return (
    <div className="flex flex-col items-center px-8 bg-white">
      <div className="w-full relative mt-6">
        <div className="flex justify-center">
          <HexagonRow />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl z-10">Quest</span>
        </div>
      </div>
      <h2 className="text-xl my-6">
        Complete quests to <br /> get extra Honey 🐝!
      </h2>
      <div className="grid grid-cols-2 gap-4 w-full">
        {quests.map((quest, index) => (
          <button
            key={index}
            className="bg-gray-100 px-4 py-6 rounded-lg flex flex-col items-center"
            onClick={() => onSelectQuest(quest)}
          >
            <p className="font-bold mb-2">{quest.name}</p>
            <div className="flex items-center">
              <img src={quest.pic} alt="pic" className="mr-1 w-8 h-8 rounded" />
              <span className="text-yellow-500 font-bold">{quest.honey} Honey</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestList;
