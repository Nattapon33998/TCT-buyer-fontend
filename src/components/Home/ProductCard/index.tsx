import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useSelectGroupProductIdState } from "../../../state/SelectProductState/hook";

import ProductInfo from "./ProductInfo";

const ProductCard: React.FC<{
  productId: number;
}> = ({ productId }) => {
  const {
    reducers: { updateSelectProductIndex },
  } = useSelectGroupProductIdState();

  let navigate = useNavigate();
  const changePage = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const selectThisItem = useCallback(() => {
    updateSelectProductIndex({ productIndex: productId });
    changePage("/product/");
  }, [changePage, productId, updateSelectProductIndex]);

  return (
    <button
      className="flex flex-col items-center w-64 h-72 bg-stone-100 rounded-lg drop-shadow-md"
      onClick={selectThisItem}
    >
      <div className="w-full h-3/5 bg-red-300 rounded-t-lg">img</div>
      <ProductInfo id={productId} />
      {/* <ProductDetail /> */}
    </button>
  );
};

export default ProductCard;
