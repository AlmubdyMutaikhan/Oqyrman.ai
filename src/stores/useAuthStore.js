// src/stores/useAuthStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem('token'),
  
  setAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ isAuthenticated: false });
  }
}));

export default useAuthStore;
