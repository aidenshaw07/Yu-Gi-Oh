import create from "zustand";
import { initialState } from "./initialState";

export const useStore = create((set) => ({
  ...initialState,
  setFieldState: (key, value) => {
    set((state) => ({
      ...state,
      [key]: value,
    }));
  },
}));
