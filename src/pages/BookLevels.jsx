import { useParams } from "react-router-dom";
import Divider from "../components/Divider/Divider";
import LevelsTable from "../components/LevelTable/LevelTable";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import { useEffect, useState } from "react";
import bookService from "../services/bookService";
import useBookStore from "../stores/useBookStore";
const BookLevels = ({}) => {
    const params = useParams();
    const setBook = useBookStore(state => state.setBook); // Assuming you have an action in the store called `setBook`
    const [book, setUserBook] = useState({});
    useEffect(() => {
        const fetch = async () => {
            const b = await bookService.getBook(params.id);
            setBook(b[0]);
            setUserBook(b[0]);
        }
        fetch();
    }, [params.id, setBook]);


    console.log(book);
    return (
        <>
            <NavbarTop />
            <Divider />
            {book && // Check if book is not null or undefined
                <LevelsTable
                    id={params.id}
                    difficulty={book?.difficulty}
                    rating={book?.rating}
                    time={book?.chapter_number * (Math.ceil(Math.random() * 4))}
                    title={book?.book_name?.slice(0, -4)}
                />
            }
            <NavbarBottom />
        </>
    )
}

export default BookLevels;