import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBook } from '@fortawesome/free-solid-svg-icons';
import './Learning.scss';
import ReadContent from '../ReadContent/ReadContent';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LearningModule = ({ readContent, audioSrc, id }) => {
  const [activeTab, setActiveTab] = useState('listen');
  const {t} = useTranslation();
  const navigate = useNavigate();
  const renderContent = () => {
    switch (activeTab) {
      case 'read':
        return <div className="read-content"><ReadContent text={readContent} /> </div>;
      case 'listen':
        return <div className='audio-content'>
                <audio controls src={audioSrc} className="audio-player"></audio>;
                <div className='audio-background'>
                </div>
              </div>
      default:
        return null;
    }
  };

  return (
    <div className="learning-module">
      <h1 style={{color:'black', display: 'flex', justifyContent:'center'}} >Етікші</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'listen' ? 'active' : ''}`}
          onClick={() => setActiveTab('listen')}
        >
          <FontAwesomeIcon icon={faPlay} /> Тыңдалым
        </button>
        <button
          className={`tab ${activeTab === 'read' ? 'active' : ''}`}
          onClick={() => setActiveTab('read')}
        >
          <FontAwesomeIcon icon={faBook} /> Оқылым
        </button>
      </div>

      <div className="content-area">
        {renderContent()}
      </div>
      <button onClick={()=>{navigate(`/book/${id}/quizz`)}} style={{margin: '12px 4px', width:'96%'}} className="submit-button">
          {t('checkReading')}
      </button>
    </div>
  );
};

export default LearningModule;
