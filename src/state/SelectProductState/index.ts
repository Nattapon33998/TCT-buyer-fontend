import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectProductIndex: 0,
};

export const productSlice = createSlice({
  name: "selectProductIndex",
  initialState,
  reducers: {
    updateSelectGroupProductIndex: (
      state,
      { payload: { productIndex } }: { payload: { productIndex: number } }
    ) => {
      state.selectProductIndex = productIndex;
    },
  },
});

export const {
  // Add your actions here
  updateSelectGroupProductIndex,
} = productSlice.actions;

export default productSlice.reducer;
