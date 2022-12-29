import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectProductId: 0,
};

export const productSlice = createSlice({
  name: "selectProductId",
  initialState,
  reducers: {
    updateSelectProductId: (
      state,
      { payload: { productIndex } }: { payload: { productIndex: number } }
    ) => {
      state.selectProductId = productIndex;
    },
  },
});

export const {
  // Add your actions here
  updateSelectProductId,
} = productSlice.actions;

export default productSlice.reducer;
