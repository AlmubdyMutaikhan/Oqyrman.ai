// src/stores/useAuthStore.js
import { create } from 'zustand';

const useThreadStore = create((set) => ({
  threads: [],
  thread: {},
  
  setThreads: (threads) => {
    set({ threads });
  },
  setThread: (thread) => {
    set({thread})
  }
}));

export default useThreadStore;
