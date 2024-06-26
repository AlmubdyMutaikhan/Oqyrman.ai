import React, { useState, useTransition } from 'react';
import './QuizzPage.scss'; // Your custom CSS file for styling
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const QuizPage = ({ title, quizData = [{}] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Additional logic for when an option is selected
  };

  const handleSubmitAnswer = () => {
    // Logic to handle the submission of the selected answer
    // Could check if answer is correct, provide feedback, etc.
    // Move to the next question
    if(currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null); // Reset the selection for the next question
    } else {
      toast.success(t('successAnswer'))
    }
   
   
  };

  const {t} = useTranslation();
  return (
    <div className="quiz-page">
      <h2 style={{color:'black'}}>{title}</h2>
      <div className="question-section">
        <div className="question-count">
          <span>{t('questions')} {currentQuestionIndex + 1}</span>/{quizData.length}
        </div>
        <div className="question-text">{currentQuestion.name}</div>
      </div>

      {currentQuestion.image && (
        <div className="question-image">
          <img src={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/947e6e67382443.5b37b0d1f20d9.jpg'} alt="Quiz Illustration" />
        </div>
      )}

      <div className="answer-section">
        {currentQuestion?.options?.length > 2 &&
          currentQuestion?.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            >
              {option.name}
            </button>
          ))}

        {currentQuestion?.options?.length <=2 && (
          <>
            <button onClick={() => handleOptionSelect('True')} className="true-false-button">
              {t('true')}
            </button>
            <button onClick={() => handleOptionSelect('False')} className="true-false-button">
            {t('false')}
            </button>
          </>
        )}
      </div>

      <button onClick={handleSubmitAnswer} className="submit-button">
        {t('answer')}
      </button>
    </div>
  );
};

export default QuizPage;
