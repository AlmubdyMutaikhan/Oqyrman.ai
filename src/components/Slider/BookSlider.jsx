import { useTranslation } from "react-i18next"
import Slider from "./Slider"
import BookCard from "../Card/Card";
import bookService from "../../services/bookService";
import useBookStore from "../../stores/useBookStore";
import { useEffect } from "react";

const bookImages = [
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/koyan.jpg?alt=media&token=7aa25a75-612f-4d81-92c8-6ba432e48930',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/dombra.jpg?alt=media&token=29ff5148-04aa-4b49-beb4-063495b0eb98',
    'https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/etik.jpg?alt=media&token=630aecf1-6ee6-414b-b9c7-02fb3c22a998',
]
const BookSlider = () => {
    const {t} = useTranslation();
    const books = useBookStore(state => state.books); // This hooks into the Zustand store's books state

    useEffect(() => {
        bookService.getTopBooks();
    }, []);

    return <Slider title={t('topBooks')} list={ books.map((book, id) => (
        <BookCard key={id} id={book.id} title={book.metadata?.name} author="Халық әдебиеті" time={book.pages * (book.difficulty === 'EASY' ? 2 : 3)}
        imageUrl={bookImages[id]} />
    ))}/>
}

export default BookSlider;