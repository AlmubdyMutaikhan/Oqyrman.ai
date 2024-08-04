import axios from 'axios';
import useBookStore from '../stores/useBookStore';


const url = 'https://oqr-back-node.vercel.app';

const getTopBooks = async () => {
   const { data } = await axios.get(`${url}/book/`);
   useBookStore.getState().setBooks(data);
}

const getBook = async (id) => {
    const { data } = await axios.get(`${url}/book/${id}`);
    useBookStore.getState().setBook(data);
    return data;
}

const getBookQuizz = async (id) => {
    const { data } = await axios.get(`${url}/quiz/book/${id}`);
    console.log(data);
    return data;
}

export default {
    getTopBooks,
    getBook,
    getBookQuizz
}