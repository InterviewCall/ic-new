import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowTrainingModulesState {
  currentModule: number | null;
}

const initialState: ShowTrainingModulesState = {
  currentModule: null,
};

const ShowTrainingModulesSlice = createSlice({
  name: "showTrainingModules",
  initialState,
  reducers: {
    closeTrainingModules: (state) => {
      state.currentModule = null;
    },
    openTrainingModules: (state, action: PayloadAction<number>) => {
      state.currentModule = action.payload;
    },
  },
});

export const { closeTrainingModules, openTrainingModules } = ShowTrainingModulesSlice.actions;
export default ShowTrainingModulesSlice.reducer;
