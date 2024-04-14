import React from 'react';
import './LevelsTable.scss'; // Your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { useNavigate } from 'react-router-dom';
const LevelsTable = ({ title='Loading...', id=52, difficulty='EASY', rating=5.5,  time=10, levels = [{isLocked:true, difficulty:'EASY', timeToRead: 2}, {isLocked:true, difficulty:'EASY', timeToRead: 3}, {isLocked:false, difficulty:'EASY', timeToRead: 2}, {isLocked:false, difficulty:'MEDIUM', timeToRead: 1}]}) => {
  const navigate = useNavigate();
  return (
    <div className="levels-table" style={{ backgroundSize:'cover', backgroundPosition:'center' }} onClick={() => navigate(`/book/${id}/learn`) }>
      <h1 className="levels-title">{title} | Деңгейлер</h1>
      <div className="levels-row">
        <span> <FontAwesomeIcon style={{color:'goldenrod', marginRight: '4px'}} icon={faTrophy} />{rating}</span>
        <span className='levelType'>{difficulty}</span>
        <span> <FontAwesomeIcon style={{color:'white', marginRight: '4px'}} icon={faClock} /> {time} мин</span>
      </div>
      <div className="levels-grid">
        {levels.map((level, index) => (
          <div key={index} className={`level-card ${level.isLocked ? 'locked' : ''}`}>
            <span className="level-number">Деңгей: {index + 1}</span>
            <span className="level-difficulty levelType">{level.difficulty}</span>
            <span className="level-time"><FontAwesomeIcon style={{color:'black', marginRight: '4px'}} icon={faClock} /> {level.timeToRead} мин</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelsTable;
