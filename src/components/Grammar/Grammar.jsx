import React, { useState } from 'react';
import './Grammar.scss';
import Modal from '../Modal/Modal';

const Grammar = ({ excerpt, questions, title }) => {
  const [answers, setAnswers] = useState(questions.map(() => ''));

  const handleSelectChange = (selectedIndex, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[selectedIndex] = value;
      return newAnswers;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Answers:', answers);
    // Further processing or API call to submit answers
  };
  const [sub, setSub] = useState(false);
  const [res, setRes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [translation, setTranslation] = useState('');
  const [description, setDescription] = useState('');



  const checkGrammar = () => {
    
    const trueAnswers = ['Зат есім', 'Етістік', 'Есімдік', 'Үстеу', 'Сын есім'];
    
    let res = trueAnswers.map((ans, index) => (
        ans !== answers[index]
    ))

    const count = trueAnswers.filter((ans,i) => (
        ans !== answers[i]
    ))

    setSub(true);
    setRes(res);
    setIsModalOpen(true);
    setTranslation(`${count.length}/5`);
    setDescription('Керемет! Осы күймен жалғастыра бер!')
  }


  


  return (
    <div className="quiz-container">
        <h4 style={{color:'black'}}>{title}</h4>
        <br/>
      <p className="text-excerpt">{excerpt}</p>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question-container">
            <label htmlFor={`question-${index}`}>{question.text}</label>
            <select
                style={{ background: sub ? (res[index] ? '#32ae8b' : '#DC3545') : 'none'}}
              id={`question-${index}`}
              value={answers[index]}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option value="">Жауап таңдау</option>
              {question.options.map((option, optionIndex) => (
                <option key={optionIndex}  value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="quizz-grammar-submit" onClick={checkGrammar}>Тапсыру</button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translation={translation}
        description={description}
      />
    </div>
  );
};

export default Grammar;
