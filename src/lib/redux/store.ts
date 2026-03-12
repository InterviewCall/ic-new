import { configureStore } from "@reduxjs/toolkit";
import showCohortFormReducer from "./slices/ShowCohortFormSlice";
import showBookACallFormReducer from "./slices/ShowBookACallFormSlice";
import showSystemBreakdownReducer from "./slices/ShowSystemBreakdown";

export const store = configureStore({
  reducer: {
    showCohortForm: showCohortFormReducer,
    showBookACallForm: showBookACallFormReducer,
    showSystemBreakdown: showSystemBreakdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;