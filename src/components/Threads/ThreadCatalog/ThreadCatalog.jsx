
import SearchBar from "../../Search/Search";
import { useEffect, useState } from "react";
import Divider from "../../Divider/Divider"
import threadService from "../../../services/threadService";
import useThreadStore from "../../../stores/useThreadStore";
import ThreadCard from "../../ThreadCard/ThreadCard";
import { Link, useNavigate } from 'react-router-dom';
import './ThreadCatalog.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
const bookImages = [
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/koyan.jpg?alt=media&token=7aa25a75-612f-4d81-92c8-6ba432e48930',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/dombra.jpg?alt=media&token=29ff5148-04aa-4b49-beb4-063495b0eb98',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/etik.jpg?alt=media&token=630aecf1-6ee6-414b-b9c7-02fb3c22a998',
]

const ThreadCatalog = () => {

    const threads = useThreadStore(state => state.threads);
    const navigate = useNavigate();
    const handleSearch = (search) => {
        console.log(search);
    }   

    useEffect(() => {
        threadService.getThreads();
        console.log('threads', threads);
    }, []);

    return (
        <div className="catalog-wrapper" style={{marginBottom:'80px', padding: '12px 16px'}}>
            <SearchBar onSearch={handleSearch}/>
            <div className="catalog-container">
                {threads.map((thread, id) => (<div key={id} style={{marginBottom: '12px'}}> 
                        <ThreadCard onClick={() => {navigate(`/threads/${thread.id}`)}} title={thread.title} commentLength={thread.commentList.length} body={thread.body}
                        type={thread.type} imageUrl={thread.image_url}/>
                       </div>        
                ))}
            </div>
            {/* <div className="thread-form__new">
                <Link to="/threads/new" >
                    <FontAwesomeIcon className="thread-new-icon" style={{marginRight: '4px'}} icon={faPencil} />
                </Link>
            </div> */}
        </div>
    )
}

{/*

      <BookCard key={book.metadata.name} title={book.metadata.name} author="Халық әдебиеті" time={book.pages * (book.difficulty === 'EASY' ? 2 : 3)}
                       imageUrl={bookImages[id]} />
                       <Divider/>

*/}

export default ThreadCatalog;