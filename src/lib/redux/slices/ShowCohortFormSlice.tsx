import { createSlice } from "@reduxjs/toolkit";

interface ShowCohortFormState {
  isOpen: boolean;
}

const initialState: ShowCohortFormState = {
  isOpen: false,
};

const showCohortFormSlice = createSlice({
  name: "showCohortForm",
  initialState,
  reducers: {
    closeCohortForm: (state) => {
      state.isOpen = false;
    },
    openCohortForm: (state) => {
      state.isOpen = true;
    },
    toggleCohortForm: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeCohortForm, openCohortForm, toggleCohortForm } = showCohortFormSlice.actions;
export default showCohortFormSlice.reducer;
