import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ style, title = 'Title', id=105, author = 'Author', time = '15', rating=Math.ceil(Math.random()*10), imageUrl='http://localhost:8080/api/file/2' }) => {

const navigate = useNavigate();
return (
    <div className="book-card" style={style} onClick={() => navigate(`/books/${id}`)}>
      <div className="book-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="book-info">
        <h3 className="book-title">{title.slice(0, -4)}</h3>
        <p className="book-author">{author}</p>
        <div className="book-meta">
            <div><FontAwesomeIcon style={{marginRight: '4px'}} icon={faClock} /> <span style={{fontWeight:'bold'}}>{time} min</span></div>
            <div><FontAwesomeIcon style={{color:'goldenrod', marginRight: '4px'}} icon={faTrophy} /><span style={{fontWeight:'bold'}}>{Math.ceil(Math.random()*5) + 9}</span></div>
         
        </div>
      </div>
    </div>
  );
};

export default BookCard;
