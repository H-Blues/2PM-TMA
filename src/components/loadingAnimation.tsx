import React, { useState, useEffect } from "react";
import CollectingHoney from "../assets/collecting-honey.gif";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 40);

    const timer2 = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress2((prev) => (prev >= 100 ? 100 : prev + 2));
      }, 40);
      return () => clearInterval(interval);
    }, 2000);

    const timer3 = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress3((prev) => (prev >= 100 ? 100 : prev + 2));
      }, 40);
      return () => clearInterval(interval);
    }, 4000);

    const closeTimer = setTimeout(() => {
      if (progress1 === 100 && progress2 === 100 && progress3 === 100) {
        onComplete();
      }
    }, 6000);

    return () => {
      clearInterval(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(closeTimer);
    };
  }, [[progress1, progress2, progress3, onComplete]]);

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
