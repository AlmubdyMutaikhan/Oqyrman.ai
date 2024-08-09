import React, { useState } from 'react';
import './Forum.scss';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPhone, faGrinStars, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import useSound from 'use-sound';
import clickSound from '../../assets/audio/click.wav';
import { toast } from 'react-toastify';
import modal_window_opening from '../../assets/audio/open.wav'


const timeAgo = (date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const secondsAgo = Math.floor((now - commentDate) / 1000);

    let interval = secondsAgo / 31536000;
    if (interval > 1) return Math.floor(interval) + " жыл бұрын";
    interval = secondsAgo / 2592000;
    if (interval > 1) return Math.floor(interval) + " ай бүрын";
    interval = secondsAgo / 86400;
    if (interval > 1) return Math.floor(interval) + " күн бұрын";
    interval = secondsAgo / 3600;
    if (interval > 1) return Math.floor(interval) + " сағат бұрын";
    interval = secondsAgo / 60;
    if (interval > 1) return Math.floor(interval) + " минут бұрын";
    return Math.floor(secondsAgo) + " секунд бұрын";
};

const Forum = ({ title, imageURL, body, commentList }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(commentList || []);
  const [playClick] = useSound(clickSound);
  const [playsfx_modal_window_opening] = useSound(modal_window_opening)
  const param = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: comments.length + 1,
      body: comment,
      createdAt: Date.now(),
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  
  const handlePlayAudio = (audioLink) => {
    console.log('section audio link', audioLink)
    const audio = new Audio(audioLink);
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  };

  return (
    <div className="forum">
      <h1 className="forum-title">{title}</h1>
    
      <div className="forum-body">
        {body?.map((section, index) => {
         return (<div key={index} className="forum-section">
            {section.image && <img src={section.image} alt={`Section ${index + 1}`} height={200} style={{borderRadius: 18}} width='100%' className="forum-section-image" />}
            <p className="forum-section-description">{section.description}</p>
            {section.hasAudio && section.audioLink && (
              <button onClick={() => {
                handlePlayAudio(section.audioLink)
              }} className="audio-play-button">
                {section.audioText}
              </button>
            )}
            {section.hasVideo && section.videoLink && (
              <video controls>
                <source src={section.videoLink} type="video/mp4" />
                {t('Your browser does not support the video element.')}
              </video>
            )}
          </div>)

})}
      </div>

      <div className="comment-section">
        <h2 className="comments-title">{t('comments')}</h2>
        {comments?.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-body">
              <FontAwesomeIcon icon={faGrinStars} className="reaction-icon" />
              {comment.body}
              <span className="comment-time">{timeAgo(comment.createdAt)}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          className="comment-input"
          value={comment}
          onChange={handleCommentChange}
          placeholder={t('fillComment')}
          required
          onFocus={playClick}
        ></textarea>
        <button type="submit" className="comment-submit-button" onClick={playClick}>
          <FontAwesomeIcon icon={faPen} /> {t('leaveComment')}
        </button>
        <br />
        <button type="submit" className="comment-submit-button" onClick={() => {
          toast.warn('Бұл функция бета-версияға қосылмаған. Толық нұсқаны алу үшін біздің инстаграм парақшамызға жазыңыз.')
        }}>
          <FontAwesomeIcon icon={faCheck} /> Біліміңді тексер
        </button>
        <br />
       
      </form>
    </div>
  );
};

export default Forum;
