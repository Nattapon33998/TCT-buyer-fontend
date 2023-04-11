import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import SelectProductState from "./SelectProductState";

const store = configureStore({
  reducer: {
    // Add your reducers here
    SelectProductState,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
