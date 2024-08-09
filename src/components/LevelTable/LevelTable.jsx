import React, { useState, useEffect } from 'react';
import './LevelsTable.scss'; // Your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LevelsTable = ({ title = 'Loading...', id = 52, difficulty = 'EASY', rating = 5.5, time = 10, levels = [{ isLocked: true, difficulty: 'EASY', timeToRead: 2 }, { isLocked: true, difficulty: 'EASY', timeToRead: 3 }, { isLocked: false, difficulty: 'EASY', timeToRead: 2 }, { isLocked: false, difficulty: 'MEDIUM', timeToRead: 1 }] }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id != 1) {
      setShowModal(true);
    }
  }, [id]);

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/bookshelf'); // Redirect or any other action you want to take
  };

  const handleWhatsAppClick = () => {
    window.open("https://www.instagram.com/oqyrman.ai/", '_blank');
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Бета-версияда бұл ертегі қолжетімді емес. Толық нұсқасын алу үшін бізге Instagram парақшамызға жазыңыз.</p>
            <button onClick={handleWhatsAppClick}>Instagram</button>
            <button onClick={handleModalClose}>Жабу</button>
          </div>
        </div>
      )}
      <div className="levels-table" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => {
        if (id == 1) {
          navigate(`/book/${id}/learn`);
        }
      }}>
        <h1 className="levels-title">{title} | Деңгейлер</h1>
        <div className="levels-row">
          <span> <FontAwesomeIcon style={{ color: 'goldenrod', marginRight: '4px' }} icon={faTrophy} />{rating}</span>
          <span className='levelType'>{difficulty}</span>
          <span> <FontAwesomeIcon style={{ color: 'white', marginRight: '4px' }} icon={faClock} /> {time} мин</span>
        </div>
        <div className="levels-grid">
          {levels.map((level, index) => (
            <div key={index} className={`level-card ${level.isLocked ? 'locked' : ''}`}>
              <span className="level-number">Деңгей: {index + 1}</span>
              <span className="level-difficulty levelType">{level.difficulty}</span>
              <span className="level-time"><FontAwesomeIcon style={{ color: 'black', marginRight: '4px' }} icon={faClock} /> {level.timeToRead} мин</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LevelsTable;
