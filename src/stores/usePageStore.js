import { create } from 'zustand';

const usePageStore = create((set) => ({
  selectedTab: 'Main',
  
  setSelectedTab: (selectedTab) => {
    set({ selectedTab });
  },
}));

export default usePageStore;
