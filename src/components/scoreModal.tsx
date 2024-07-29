import React from "react";

interface ScoreModalProps {
  score: number;
  onClose: () => void;
}

const ScoreModal: React.FC<ScoreModalProps> = ({ score, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Congratulations! 🎉</h2>
        <p className="mb-6">
          You've earned <span className="font-bold text-yellow-500">{score} HONEY</span> points!
        </p>
        <button
          onClick={onClose}
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors"
        >
          Awesome!
        </button>
      </div>
    </div>
  );
};

export default ScoreModal;
