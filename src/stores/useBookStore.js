// src/stores/useBookStore.js
import { create } from 'zustand';

const useBookStore = create((set) => ({
    books: [],
    book: {},
    setBooks: (books) => set({ books }),
    setBook: book => set({book})
}));

export default useBookStore;
