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
      name: "กล้วยหอม",
      amount: "3",
      unit: "kg",
      farmAddress: "0x1234567890123456789012345678901234567890",
      farmName: "สวนกล้วยลาดกระบัง",
      farmerAddress: "0x1234567890123456789012345678901234567890",
      setId: 1,
    },
    {
      id: 1,
      name: "กล้วยน้ำว้า",
      amount: "3",
      unit: "kg",
      farmAddress: "0x1234567890123456789012345678901234567890",
      farmName: "สวนกล้วยลาดกระบัง",
      farmerAddress: "0x1234567890123456789012345678901234567890",
      setId: 1,
    },
    {
      id: 2,
      name: "ส้มสายน้ำผึ้ง",
      amount: "3",
      unit: "kg",
      farmAddress: "0x1234567890123456789012345678901234567890",
      farmName: "สวนส้มลาดกระบัง",
      farmerAddress: "0x1234567890123456789012345678901234567890",
      setId: 1,
    },
  ],
  productIdList: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, { payload: { newDate } }) => {
      state.products = newDate;
    },
    updateProductIdList: (state, { payload: { newData } }) => {
      console.log(newData);
      state.productIdList = newData;
    },
  },
});

export const {
  // Add your actions here
  updateProducts,
  updateProductIdList,
} = productSlice.actions;

export default productSlice.reducer;
