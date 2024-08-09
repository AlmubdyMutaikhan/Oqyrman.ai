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

  const handlePlayAudio = (audioLink) => {
    console.log('section audio link', audioLink)
    const audio = new Audio(audioLink);
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
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
      if(score > 6) {
        handlePlayAudio('https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/win.wav?alt=media&token=0b1886e2-14f9-47d7-93f6-c7a80a42df7d')
      } else {
        handlePlayAudio('https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/lose.wav?alt=media&token=89e6ee6a-4355-4932-b61f-f9c74cef8a04')
      }
      setIsModalOpen(true);
    }
  };

  const navigate = useNavigate();



  const handleCloseModal = () => {
    setIsModalOpen(false);
    if(score > 6) {
      navigate('/games/asan-usen')
    } else {
    
      navigate('/books/1')
    }
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
          description={score > 6 ? 'Алақай, ойынға өту үшін \'Ок\' батырмасын бас' : 'Ойынға өту үшін қайтадан ертегіні оқып шық. Сәттілік :)'}
        >
        </Modal>
      )}
    </div>
  );
};

export default QuizPage;
