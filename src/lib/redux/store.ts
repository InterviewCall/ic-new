import { configureStore } from "@reduxjs/toolkit";
import showCohortFormReducer from "./slices/ShowCohortFormSlice";
import showBookACallFormReducer from "./slices/ShowBookACallFormSlice";
import showSystemBreakdownReducer from "./slices/ShowSystemBreakdown";
import showMotionAnimationsReducer from "./slices/ShowMotionAnimationsSlice";
import showTrainingModulesReducer from "./slices/ShowTrainingModulesSlice";


export const store = configureStore({
  reducer: {
    showCohortForm: showCohortFormReducer,
    showBookACallForm: showBookACallFormReducer,
    showSystemBreakdown: showSystemBreakdownReducer,
    showMotionAnimations: showMotionAnimationsReducer,
    showTrainingModules: showTrainingModulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;