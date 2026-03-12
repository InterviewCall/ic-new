import { createSlice } from "@reduxjs/toolkit";

interface ShowSystemBreakdownState {
  isOpen: boolean;
}

const initialState: ShowSystemBreakdownState = {
  isOpen: false,
};

const showSystemBreakdownSlice = createSlice({
  name: "showSystemBreakdown",
  initialState,
  reducers: {
    closeSystemBreakdown: (state) => {
      state.isOpen = false;
    },
    openSystemBreakdown: (state) => {
      state.isOpen = true;
    },
    toggleSystemBreakdown: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeSystemBreakdown, openSystemBreakdown, toggleSystemBreakdown } = showSystemBreakdownSlice.actions;
export default showSystemBreakdownSlice.reducer;
