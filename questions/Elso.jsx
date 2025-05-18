import React, { useState } from 'react';
import { ElsoKerdesek as allQuestions } from './ElsoKerdesek.js';
import { useNavigate } from 'react-router-dom';

export const Elso = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate  = useNavigate()

  const handleDifficultySelect = (level) => {
    let questionsCopy = [...allQuestions];
    if (level === "hard") {
      questionsCopy = questionsCopy.sort(() => Math.random() - 0.5);
    }
    setShuffledQuestions(questionsCopy);
    setDifficulty(level);
  };

  const handleOptionSelect = (questionIndex, option) => {
    if (!submitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: option,
      });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (!difficulty) {
    return (<>
        
      <div className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white ">
          <button
        onClick={() => navigate('/')}
        className="bg-violet-800 hover:bg-violet-900 absolute left-5 top-5 text-white font-semibold py-2 px-3 rounded-2xl transition duration-200 shadow-lg"
      >
        Vissza a főoldalra
      </button>
        <h1 className="text-3xl mb-6">Válassz nehézségi szintet</h1>
        <div className="flex gap-6">
          <button
            onClick={() => handleDifficultySelect("easy")}
            className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-xl text-lg shadow-lg transition"
          >
            Könnyű
          </button>
          <button
            onClick={() => handleDifficultySelect("hard")}
            className="bg-rose-700 hover:bg-rose-800 px-6 py-3 rounded-xl text-lg shadow-lg transition"
          >
            Nehéz
          </button>
        </div>
      </div>
      </>
    );
  }

  return (
    
    <div className="min-h-screen bg-slate-900 p-6 text-white flex flex-col items-center">
        
          <button
        onClick={() => navigate('/')}
        className="bg-violet-800 hover:bg-violet-900 absolute left-5 top-5 text-white font-semibold py-2 px-3 rounded-2xl transition duration-200 shadow-lg"
      >
        Vissza a főoldalra
      </button>
      <h1 className="text-4xl mb-10">Kvíz</h1>

      <div className="space-y-10 w-full max-w-3xl">
        {shuffledQuestions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl mb-4">{q.question}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswers[qIndex] === option;
                const isCorrect = q.answer === option;
                let buttonColor = "bg-slate-700 hover:bg-slate-600";

                if (submitted) {
                  if (isCorrect) {
                    buttonColor = "bg-green-600"; // Correct answer is green
                  } else if (isSelected && !isCorrect) {
                    buttonColor = "bg-rose-600"; // Selected wrong answer is red
                  }
                } else if (isSelected) {
                  buttonColor = "bg-blue-600"; // Selected option before submission
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleOptionSelect(qIndex, option)}
                    className={`${buttonColor} px-4 py-3 rounded-lg transition text-white shadow-md`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
     

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-10 bg-rose-500 hover:bg-rose-600 px-8 py-4 rounded-2xl text-xl shadow-lg transition"
        >
          Beküldés
        </button>
      )}
    </div>
  );
};
