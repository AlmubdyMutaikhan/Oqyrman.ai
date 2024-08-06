import useBookStore from "../../stores/useBookStore"
import SearchBar from "../Search/Search"
import BookCard from "../Card/Card"
import bookService from "../../services/bookService"
import { useEffect, useState } from "react"
import Divider from "../Divider/Divider"
const bookImages = [
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/DALL%C2%B7E%202024-08-06%2020.16.21%20-%20A%20vibrant%20and%20engaging%20illustration%20showing%20Asan%20and%20Ussen%20reuniting%20with%20their%20family%20and%20friends%20in%20their%20village.%20The%20scene%20depicts%20joyful%20expressi.webp?alt=media&token=9b05f37a-530f-448e-93b6-c6e57a4380bc',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/bere-bilgen.jpg?alt=media&token=9c4f6348-3105-45ca-97ce-b753bff919af',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/dombra.jpg?alt=media&token=29ff5148-04aa-4b49-beb4-063495b0eb98',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/etik.jpg?alt=media&token=630aecf1-6ee6-414b-b9c7-02fb3c22a998',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/karagylysh.png?alt=media&token=1518953e-df7d-4443-ba9b-f7c7d91a7ad8',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/karlygash.png?alt=media&token=8413f76e-c78a-4a09-ae36-548f72df7cea',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/qasqyr.png?alt=media&token=ffea0775-1870-42c1-b70a-81621330106b',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/patsha.png?alt=media&token=98fcde75-0442-46fc-aa3d-6eae0b6bee1f',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/khanvizr.png?alt=media&token=b1b311d4-3b2b-4d92-94e8-581173139f68',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/ushzhetim.png?alt=media&token=da9cf7e2-080f-43aa-b389-1b4e91092b3c',
    
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
                    <BookCard key={book?.metadata?.name} id={book?.id} title={book?.metadata?.name} author="Халық әдебиеті" time={3 * (book.difficulty === 'EASY' ? 2 : 3)}
                       imageUrl={bookImages[id]} />
                       <Divider/>
                       </div>
                      
                ))}
            </div>
        </div>
    )
}

export default Catalog;