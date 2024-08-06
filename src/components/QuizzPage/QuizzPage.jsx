import React, { useState } from 'react';
import './QuizzPage.scss'; // Your custom CSS file for styling
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal'; // Import your Modal component
import { useNavigate } from 'react-router-dom';

const QuizPage = ({ title, quizData = [{}] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption) {
      if (selectedOption.name === currentQuestion.correctAnswer) {
        setScore(score + 1);
        toast.success('Бәрекелді, жарайсың!');
      } else {
        toast.error('Упс, жауап дұрыс емес...');
      }
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null); // Reset the selection for the next question
    } else {
      setIsModalOpen(true);
    }
  };

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/books/1')
  };

  const { t } = useTranslation();
  return (
    <div className="quiz-page">
      <h2 style={{ color: 'black' }}>{title}</h2>
      <div className="question-section">
        <div className="question-count">
          <span>Сұрақтар {currentQuestionIndex + 1}</span>/{quizData.length}
        </div>
        <div className="question-text">{currentQuestion?.question}</div>
      </div>

      {currentQuestion?.image && (
        <div className="question-image">
          <img src={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/947e6e67382443.5b37b0d1f20d9.jpg'} alt="Quiz Illustration" />
        </div>
      )}

      <div className="answer-section">
        {currentQuestion?.options?.length > 2 &&
          currentQuestion?.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            >
              {option.name}
            </button>
          ))}

        {currentQuestion?.options?.length <= 2 && (
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

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}
          translation={`Ұпай саны ${score} / ${quizData.length}`}
          description={'Жаңа сұрақтарға жауап беру үшін қайта Кітап соңындағы "Тапсырмаларға көшу" батырмасын бас'}
        >
        </Modal>
      )}
    </div>
  );
};

export default QuizPage;
