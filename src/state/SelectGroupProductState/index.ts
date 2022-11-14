import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectGroupProductIndex: 0,
};

export const productSlice = createSlice({
  name: "SelectGroupProductId",
  initialState,
  reducers: {
    updateSelectGroupProductIndex: (
      state,
      { payload: { groupIndex } }: { payload: { groupIndex: number } }
    ) => {
      state.selectGroupProductIndex = groupIndex;
    },
  },
});

export const {
  // Add your actions here
  updateSelectGroupProductIndex,
} = productSlice.actions;

export default productSlice.reducer;
