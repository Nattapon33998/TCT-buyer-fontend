import { useSelector } from "react-redux";
import { useCallback } from "react";

import { AppState, useAppDispatch } from "../index";

import { updateSelectGroupProductIndex as updateSelectGroupProductIndexAction } from "./index";

export const useSelectGroupProductIdState = (): {
  selectGroupProductIndex: number | undefined;
  reducers: {
    updateSelectGroupProductIndex: (data: { groupIndex: number }) => void;
  };
} => {
  const dispatch = useAppDispatch();
  const selectGroupProductIndexState = useSelector<
    AppState,
    AppState["SelectGroupProductState"]
  >((state) => state.SelectGroupProductState);

  const updateSelectGroupProductIndex = useCallback(
    (data: { groupIndex: number }) => {
      dispatch(updateSelectGroupProductIndexAction(data));
    },
    [dispatch]
  );

  return {
    // Add your actions here
    selectGroupProductIndex:
      selectGroupProductIndexState.selectGroupProductIndex,
    reducers: {
      updateSelectGroupProductIndex,
    },
  };
};
