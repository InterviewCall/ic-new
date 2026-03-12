import { createSlice } from "@reduxjs/toolkit";

interface ShowBookACallFormState {
  isOpen: boolean;
}

const initialState: ShowBookACallFormState = {
  isOpen: false,
};

const showBookACallFormSlice = createSlice({
  name: "showBookACallForm",
  initialState,
  reducers: {
    closeBookACallForm: (state) => {
      state.isOpen = false;
    },
    openBookACallForm: (state) => {
      state.isOpen = true;
    },
    toggleBookACallForm: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeBookACallForm, openBookACallForm, toggleBookACallForm } = showBookACallFormSlice.actions;
export default showBookACallFormSlice.reducer;
