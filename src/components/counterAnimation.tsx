import React, { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const CounterAnimation: React.FC<AnimatedCounterProps> = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CounterAnimation;
