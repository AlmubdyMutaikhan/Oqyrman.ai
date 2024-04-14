import React, { useState } from 'react';
import './ReadContent.scss'; // Make sure to create this CSS file
import Modal from '../Modal/Modal';

const ReadContent = ({ text }) => {
  const [selectedWord, setSelectedWord] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [translation, setTranslation] = useState('');
  const [description, setDescription] = useState('');


  const handleWordClick = (word) => {
    const translatedWord = 'Ночь';
    const wordDescription = 'Часть суток от вечера до утра.'
    setTranslation(translatedWord);
    setDescription(wordDescription);
    setIsModalOpen(true);
};


  const words = text.split(/\s+/).map((word, index) => (
    <span
      key={index}
      className={`word ${selectedWord === word ? 'selected' : ''}`}
      onClick={() => handleWordClick(word)}
    >
      {word + ' '}
    </span>
  ));

  return (<><div className="render-content">{words}</div>
   <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translation={translation}
        description={description}
      />
  </>);
};

export default ReadContent;
