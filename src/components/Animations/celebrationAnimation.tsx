import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import ScoreModal from "../scoreModal";

interface CelebrationAnimationProps {
  onComplete: () => void;
  score: number;
}

const CelebrationAnimation: React.FC<CelebrationAnimationProps> = ({ onComplete, score }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const duration = 1000;
    const animationEnd = Date.now() + duration;

    const confettiAnimation = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        setShowModal(true);
        return;
      }

      const particleCount = 10 * (timeLeft / duration);

      confetti({
        particleCount,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FFA500", "#FF6347"],
      });

      requestAnimationFrame(confettiAnimation);
    };

    confettiAnimation();

    return () => {
      cancelAnimationFrame(confettiAnimation as unknown as number);
    };
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    onComplete();
  };

  return <>{showModal && <ScoreModal score={score} onClose={handleModalClose} />}</>;
};

export default CelebrationAnimation;
