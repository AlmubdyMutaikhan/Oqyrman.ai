import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './ThreadCard.scss';

const ThreadCard = ({ onClick=()=>{}, style, title = 'Thread#1', type='TUTORIAL', body = 'Some text...', commentLength = 0, imageUrl='https://avatars.mds.yandex.net/i?id=de1ce40cb2afd92618648cf152aabaac10b9f532-10157623-images-thumbs&n=13' }) => {
return (
    <div className="thread-card" onClick={onClick} style={style}>
      <div className="book-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <div className="book-meta">
            <div><FontAwesomeIcon style={{marginRight: '4px'}} icon={faComment} /> <span style={{fontWeight:'bold'}}>{commentLength}</span></div>
            <div className={`threadType ${type !== 'TUTORIAL' && 'threadTypeForum' }`} >{type}</div>
        </div>
      </div>
      <div className='thread-description'>
        {body.slice(0, 50)}...
      </div>
    </div>
  );
};

export default ThreadCard;
