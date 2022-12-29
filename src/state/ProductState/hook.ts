import { useSelector } from "react-redux";
import { useCallback } from "react";

import { AppState, useAppDispatch } from "../index";
import { ProductState, Product } from "../types";

import {
  updateProducts as updateProductAction,
  updateProductIdList as updateProductIdListAction,
} from "./index";

export const useProductState = (): {
  productsData: Product[];
  productsGroupData: any;
  productIdListData: number[];
  reducers: {
    updateProducts: (newDate: ProductState) => void;
    updateProductIdList: (newData: any) => void;
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

  const updateProductIdList = useCallback(
    (data: ProductState) => {
      dispatch(updateProductIdListAction(data));
    },
    [dispatch]
  );

  return {
    // Add your actions here
    productsData: productsState.products,
    productsGroupData: productsState.productsGroup,
    productIdListData: productsState.productIdList,
    reducers: {
      updateProducts,
      updateProductIdList,
    },
  };
};
