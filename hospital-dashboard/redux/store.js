import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./slices/patientSlices";

export const store = configureStore({
  reducer: {
    patients: patientReducer,
  },
});
