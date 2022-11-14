import { useSelector } from "react-redux";
import { useCallback } from "react";

import { AppState, useAppDispatch } from "../index";

import { updateSelectGroupProductIndex as updateSelectGroupProductIndexAction } from "./index";

export const useSelectGroupProductIdState = (): {
  selectProductIndex: number | undefined;
  reducers: {
    updateSelectProductIndex: (data: { productIndex: number }) => void;
  };
} => {
  const dispatch = useAppDispatch();
  const selectGroupProductIndexState = useSelector<
    AppState,
    AppState["SelectProductState"]
  >((state) => state.SelectProductState);

  const updateSelectProductIndex = useCallback(
    (data: { productIndex: number }) => {
      dispatch(updateSelectGroupProductIndexAction(data));
    },
    [dispatch]
  );

  return {
    // Add your actions here
    selectProductIndex: selectGroupProductIndexState.selectProductIndex,
    reducers: {
      updateSelectProductIndex,
    },
  };
};
