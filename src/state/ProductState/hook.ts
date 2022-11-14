import { useSelector } from "react-redux";
import { useCallback } from "react";

import { AppState, useAppDispatch } from "../index";
import { ProductState, Product } from "../types";

import { updateProducts as updateProductAction } from "./index";

export const useProductState = (): {
  productsData: Product[];
  productsGroupData: any;
  reducers: {
    updateProducts: (newDate: ProductState) => void;
  };
} => {
  const dispatch = useAppDispatch();
  const productsState = useSelector<AppState, AppState["productsState"]>(
    (state) => state.productsState
  );

  const updateProducts = useCallback(
    (data: ProductState) => {
      dispatch(updateProductAction(data));
    },
    [dispatch]
  );

  return {
    // Add your actions here
    productsData: productsState.products,
    productsGroupData: productsState.productsGroup,
    reducers: {
      updateProducts,
    },
  };
};
