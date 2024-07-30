import React, { useState } from "react";
import { Quest, QuestionData, questionsData } from "./questData";

interface QuestionProps {
  quest: Quest;
}

const Questions: React.FC<QuestionProps> = ({ quest }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
  };

  const renderQuestion = (question: QuestionData, index: number) => (
    <div key={question.id} className="mb-6">
      <p className="font-semibold mb-2">
        <span className="mr-2">{index + 1}.</span>
        {question.question}
      </p>
      {question.options.map((option, optionIndex) => (
        <div key={optionIndex} className="flex items-center mb-2 ml-6">
          <input
            type="radio"
            id={`${question.id}-${optionIndex}`}
            name={question.id}
            value={option}
            checked={answers[question.id] === option}
            onChange={() => handleAnswer(question.id, option)}
            className="mr-2"
          />
          <label htmlFor={`${question.id}-${optionIndex}`}>{option}</label>
        </div>
      ))}
    </div>
  );

  const questions = questionsData[quest.name];

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-16">
      <h3 className="font-bold mb-4">{quest.name}</h3>
      {questions ? (
        questions.map((q, index) => renderQuestion(q, index))
      ) : (
        <p>No specific questions available for this quest.</p>
      )}
      <button
        onClick={handleSubmit}
        className="w-full bg-yellow-500 text-white py-2 my-4 rounded-lg hover:bg-yellow-600 transition-colors"
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
