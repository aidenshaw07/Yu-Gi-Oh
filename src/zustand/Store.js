import create from "zustand";
import { initiaState } from "./initialState";

export const useStore = create((set) => ({
  ...initiaState,
  setFieldState: (key, value) => {
    set((state) => ({
      ...state,
      [key]: value,
    }));
  },
}));
