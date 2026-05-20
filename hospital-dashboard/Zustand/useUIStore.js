import { create } from "zustand";

const useUIStore = create((set) => ({
  darkMode: false,

  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));

export default useUIStore;
