import axios from '../utils/axios';
import useBookStore from '../stores/useBookStore';

const getTopBooks = async () => {
   const bookList = await axios.get('/book');
   useBookStore.getState().setBooks(bookList);
}

const getBook = async (id) => {
    const book = await axios.get(`/quiz/book/${id}`);
    useBookStore.getState().setBook(book);
    return book;
}

export default {
    getTopBooks,
    getBook
}