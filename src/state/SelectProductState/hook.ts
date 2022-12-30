import { useSelector } from "react-redux";
import { useCallback } from "react";

import { AppState, useAppDispatch } from "../index";

import { updateSelectProductId as updateSelectProductIdAction } from "./index";

export const useSelectGroupProductIdState = (): {
  selectProductId: number | undefined;
  reducers: {
    updateSelectProductId: (data: { productIndex: number }) => void;
  };
} => {
  const dispatch = useAppDispatch();
  const selectGroupProductIndexState = useSelector<
    AppState,
    AppState["SelectProductState"]
  >((state) => state.SelectProductState);

  const updateSelectProductId = useCallback(
    (data: { productIndex: number }) => {
      dispatch(updateSelectProductIdAction(data));
    },
    [dispatch]
  );

  return {
    // Add your actions here
    selectProductId: selectGroupProductIndexState.selectProductId,
    reducers: {
      updateSelectProductId,
    },
  };
};
