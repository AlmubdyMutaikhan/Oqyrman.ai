import useBookStore from "../../stores/useBookStore"
import SearchBar from "../Search/Search"
import BookCard from "../Card/Card"
import bookService from "../../services/bookService"
import { useEffect, useState } from "react"
import Divider from "../Divider/Divider"
const bookImages = [
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/koyan.jpg?alt=media&token=7aa25a75-612f-4d81-92c8-6ba432e48930',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/dombra.jpg?alt=media&token=29ff5148-04aa-4b49-beb4-063495b0eb98',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/etik.jpg?alt=media&token=630aecf1-6ee6-414b-b9c7-02fb3c22a998',
]


const Catalog = () => {

    const books = useBookStore(state => state.books);
    const [filteredBooks, setFilteredBooks] = useState([]);
    
    const handleSearch = (search) => {
        const newBooks = books.filter((book) => {
            return book?.metadata?.name.toLowerCase().includes(search);
        })
        setFilteredBooks(newBooks);
    }   


    useEffect(() => {
        bookService.getTopBooks();
        setFilteredBooks(books);
    }, []);

    return (
        <div className="catalog-wrapper" style={{marginBottom:'80px', padding: '12px 16px'}}>
            <SearchBar onSearch={handleSearch}/>
            <div className="catalog-container">
                {(filteredBooks.length === 0 ? books : filteredBooks).map((book, id) => (<div style={{marginBottom: '12px'}}> 
                    <BookCard key={book?.metadata?.name} id={book?.id} title={book?.metadata?.name} author="Халық әдебиеті" time={book.pages * (book.difficulty === 'EASY' ? 2 : 3)}
                       imageUrl={bookImages[id]} />
                       <Divider/>
                       </div>
                      
                ))}
            </div>
        </div>
    )
}

export default Catalog;