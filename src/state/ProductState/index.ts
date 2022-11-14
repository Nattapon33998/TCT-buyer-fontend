import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsGroup: [
    {
      productSetName: "Product Set 1",
      productSetId: 1,
      farmName: "Farm 1",
      quantity: 100,
      remaining: 20,
    },
    {
      productSetName: "Product Set 2",
      productSetId: 2,
      farmName: "Farm 1",
      quantity: 100,
      remaining: 50,
    },
    {
      productSetName: "Product Set 3",
      productSetId: 3,
      farmName: "Farm 1",
      quantity: 100,
      remaining: 0,
    },
  ],
  products: [
    {
      id: 0,
      name: "Product 1",
      amount: "3",
      unit: "kg",
      farmAddress: "0x1234567890123456789012345678901234567890",
      farmerAddress: "0x1234567890123456789012345678901234567890",
      setId: 1,
    },
    {
      id: 1,
      name: "Product 1",
      amount: "3",
      unit: "kg",
      farmAddress: "0x1234567890123456789012345678901234567890",
      farmerAddress: "0x1234567890123456789012345678901234567890",
      setId: 1,
    },
    {
      id: 2,
      name: "Product 1",
      amount: "3",
      unit: "kg",
      farmAddress: "0x1234567890123456789012345678901234567890",
      farmerAddress: "0x1234567890123456789012345678901234567890",
      setId: 1,
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, { payload: { newDate } }) => {
      state.products = newDate;
    },
  },
});

export const {
  // Add your actions here
  updateProducts,
} = productSlice.actions;

export default productSlice.reducer;
