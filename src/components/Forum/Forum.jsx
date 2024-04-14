import React, { useState } from 'react';
import './Forum.scss'; // This will be your CSS file to style the component
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const timeAgo = (date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const secondsAgo = Math.floor((now - commentDate) / 1000);
   
    let interval = secondsAgo / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " жыл бұрын";
    }
    interval = secondsAgo / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " ай бүрын";
    }
    interval = secondsAgo / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " күн бұрын";
    }
    interval = secondsAgo / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " сағат бұрын";
    }
    interval = secondsAgo / 60;
    if (interval > 1) {
      return Math.floor(interval) + " минут бұрын";
    }
    return Math.floor(secondsAgo) + " секунд бұрын";
  };

  
const Forum = ({ title, imageURL, body, commentList }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([...commentList]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const param = useParams();
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Assuming a comment object has at least an id and text
    const newComment = {
      id: comments.length + 1, // This is a simplistic approach for unique IDs
      body: comment,
      createdAt: Date.now()
      // You can include additional fields like timestamp, user information, etc.
    };

    // Add the new comment to the existing comments
    setComments([...comments, newComment]);
    setComment(''); // Reset the comment input field
  };
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className="forum">
      <h1 className="forum-title">{title}</h1>
      {imageURL && <img src={imageURL} alt="Discussion topic" className="forum-image" />}
      <p className="forum-body">{body}</p>
      <div className="comment-section">
        <h2 className="comments-title">{t('comments')}</h2>
        {comments.map((comment) => (
          <div key={comment.id}  className="comment" style={{display:'flex', alignItems:'center', padding:'4px 6px',fontWeight:'bold', justifyContent:'space-around'}}>
            {comment.body}
  
            <span style={{width:'10px', color:'gray', fontSize:'10px'}}>{timeAgo(comment.createdAt)}</span>

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
        ></textarea>
        <button type="submit" className="comment-submit-button">
        <FontAwesomeIcon style={{marginRight: '4px'}} icon={faPen} />{t('leaveComment')}
        </button>
        <br />
        <div className="comment-submit-button" onClick={() => navigate(`/threads/${param.id}/videoSession`)}>
        <FontAwesomeIcon style={{marginRight: '4px'}} icon={faPhone} /> {t('goCall')}
        </div>
      </form>

   
    </div>
  );
};

export default Forum;
