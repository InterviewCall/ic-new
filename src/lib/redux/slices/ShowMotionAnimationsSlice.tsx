import { createSlice } from "@reduxjs/toolkit";

interface ShowMotionAnimationsState {
  isOpen: boolean;
}

const initialState: ShowMotionAnimationsState = {
  isOpen: true,
};

const showMotionAnimationsSlice = createSlice({
  name: "showMotionAnimations",
  initialState,
  reducers: {
    closeMotionAnimation: (state) => {
      state.isOpen = false;
    },
    openMotionAnimation: (state) => {
      state.isOpen = true;
    },
    toggleMotionAnimation: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeMotionAnimation, openMotionAnimation, toggleMotionAnimation } = showMotionAnimationsSlice.actions;
export default showMotionAnimationsSlice.reducer;
