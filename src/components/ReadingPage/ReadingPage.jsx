import React, { useState, useEffect, useRef } from 'react';
import './ReadingPage.scss'; // Make sure to create this CSS file
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const ReadingPage = ({ text, images, title }) => {
  const [selectedWord, setSelectedWord] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [translation, setTranslation] = useState('');
  const [description, setDescription] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedTab, setSelectedTab] = useState('reading'); // 'reading' or 'audio'
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const readingContainerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = readingContainerRef.current;
      if (container) {
        const totalHeight = container.scrollHeight - container.clientHeight;
        const scrollTop = container.scrollTop;
        const scrollProgress = (scrollTop / totalHeight) * 100;
        setScrollPosition(scrollProgress);

        if (scrollTop > lastScrollY.current && scrollTop > 100) {
          setIsHeaderVisible(false);
        } else if (scrollTop < lastScrollY.current) {
          setIsHeaderVisible(true);
        }
        lastScrollY.current = scrollTop;
      }
    };

    const container = readingContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const navigate = useNavigate();

  const handleWordClick = (word) => {
    setSelectedWord(word);
    const translatedWord = translateWord(word);
    const wordDescription = getDescription(word);
    setTranslation(translatedWord);
    setDescription(wordDescription);
    setIsModalOpen(true);
  };

  const translateWord = (word) => {
    // Replace with actual translation logic
    return 'Translation';
  };

  const getDescription = (word) => {
    // Replace with actual description logic
    return 'Description of the word.';
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleKnowledgeCheck = () => {
    navigate('/book/1/quizz')
  };

  return (
    <div className="reading-container" ref={readingContainerRef}>
      <div className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <h1 className="title">{title}</h1>
        <div className="tabs">
          <button
            className={`tab ${selectedTab === 'reading' ? 'active' : ''}`}
            onClick={() => handleTabClick('reading')}
          >
            Оқылым
          </button>
          <button
            className={`tab ${selectedTab === 'audio' ? 'active' : ''}`}
            onClick={() => handleTabClick('audio')}
          >
            Тыңдалым
          </button>
        </div>
      </div>
      {selectedTab === 'reading' && (
        <div className="content">
          <div className="progress-bar" style={{ width: `${scrollPosition}%` }} />
          {text.map((page, index) => (
            <div key={index} className="page">
              <div className="text-content">
                {page.split(/\s+/).map((word, i) => (
                  <span
                    key={i}
                    className={`word ${selectedWord === word ? 'selected' : ''}`}
                    onClick={() => handleWordClick(word)}
                  >
                    {word + ' '}
                  </span>
                ))}
              </div>
              {images[index] && <img src={images[index]} alt="Illustration" className="page-image" />}
            </div>
          ))}
          <div className="page page-last">
            <div className="text-content">
              <p>Ал енді ертегі бойынша өз біліміңді Жасанды интеллект құрастырған қызықты сұрақтар арқылы тексеріп, 
                ертегі бойынша ойын ойнауды ұтып ал!
              </p>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/DALL%C2%B7E%202024-08-06%2020.32.15%20-%20A%20vibrant%20and%20engaging%20illustration%20showing%20a%20kid%20joyfully%20reading%20a%20book%20and%20doing%20some%20reading%20work.%20The%20scene%20features%20a%20cheerful%20child%2C%20surrounded.webp?alt=media&token=3a6f2ef8-6196-4c98-9437-91a0fd42a0b8" alt="Placeholder" className="page-image" />
            <button className="knowledge-check-button" onClick={handleKnowledgeCheck}>
                Тапсырмаларға көшу
            </button>
          </div>
        </div>
      )}
      {selectedTab === 'audio' && (
        <div className="audio-content">
          <p>Аудио бета-версияға қосылмаған. Толық контентті алу үшін бізге жазыңыз</p>
          <a href="https://www.instagram.com/oqyrman.ai/" className="whatsapp-button">Бізге инстаграмға жазыңыз</a>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translation={translation}
        description={description}
      />
    </div>
  );
};

export default ReadingPage;
