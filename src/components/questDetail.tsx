// QuestDetail.tsx
import React from "react";
import { ChevronLeft, Gift } from "lucide-react";

interface Quest {
  name: string;
  honey: number;
}

interface QuestDetailProps {
  quest: Quest;
  onBack: () => void;
}

const QuestDetail: React.FC<QuestDetailProps> = ({ quest, onBack }) => {
  const questions = ["How old are you?", "How old are you?", "How old are you?"];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <button onClick={onBack} className="text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-bold">Quest : {quest.name}</h2>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">submit</button>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-8">
          <Gift className="mr-2" size={48} />
          <div>
            <p>
              Reward : <span className="text-yellow-500 font-bold">{quest.honey} Honey</span>
            </p>
            <p>Number of Item : 20</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold mb-4">Data survey :</h3>
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <p>
                {index + 1}. {question}
              </p>
              <button className="w-full bg-yellow-500 text-white py-2 rounded-lg mt-2">Input</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestDetail;
