import React, { useState, useEffect } from "react";
import CollectingHoney from "../../assets/collecting-honey.gif";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentProgress = 1;

    const updateProgress = () => {
      if (currentProgress <= 100) {
        setProgress1(() => Math.min(currentProgress, 100));
      }
      if (currentProgress > 100 && currentProgress <= 200) {
        setProgress2(() => Math.min(currentProgress - 100, 100));
      }
      if (currentProgress > 200 && currentProgress <= 300) {
        setProgress3(() => Math.min(currentProgress - 200, 100));
      }

      currentProgress++;

      if (currentProgress > 300) {
        clearInterval(timer);
        onComplete();
      }
    };

    timer = setInterval(updateProgress, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  const ProgressBar = ({ progress, text }: { progress: number; text: string }) => (
    <div className="w-full max-w-sm mb-4">
      <div className="text-left mb-1 text-gray-700">{text}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-yellow-400 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right mt-1 text-sm text-gray-600">{progress}%</div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-white p-4">
      <h2 className="text-2xl font-bold my-4">Get Your Public Account Data</h2>
      <div className="w-2/3 ml-4">
        <img src={CollectingHoney} alt="Loading GIF" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full p-8 flex flex-col justify-center">
        <ProgressBar progress={progress1} text="Collecting your creation time..." />
        <ProgressBar progress={progress2} text="Analyzing your activity level..." />
        <ProgressBar progress={progress3} text="Checking your telegram premium..." />
      </div>
    </div>
  );
};

export default LoadingAnimation;
