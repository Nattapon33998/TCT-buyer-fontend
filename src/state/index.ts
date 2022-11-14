import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import productsState from "./ProductState";
import SelectProductState from "./SelectProductState";

const store = configureStore({
  reducer: {
    // Add your reducers here
    productsState,
    SelectProductState,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
