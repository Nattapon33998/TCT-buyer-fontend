import React, { useCallback } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { useSelectGroupProductIdState } from "../../state/SelectGroupProductState/hook";

const ProductCard: React.FC<{
  productSetName: string;
  productSetId: number;
  farmName: string;
  quantity: number;
  remaining: number;
  groupIndex: number;
}> = ({
  productSetName,
  productSetId,
  farmName,
  quantity,
  remaining,
  groupIndex,
}) => {
  const remainingBar = (remaining / quantity) * 100;
  const {
    reducers: { updateSelectGroupProductIndex },
  } = useSelectGroupProductIdState();

  const selectThisGroup = useCallback(() => {
    updateSelectGroupProductIndex({ groupIndex });
    changePage("/product/");
  }, [groupIndex, updateSelectGroupProductIndex]);

  let navigate = useNavigate();
  const changePage = (path: string): void => {
    navigate(path);
  };

  return (
    <button
      className="flex flex-col items-center w-64 h-72 bg-stone-100 rounded-lg drop-shadow-md"
      onClick={selectThisGroup}
    >
      <div className="w-full h-3/5 bg-red-300 rounded-t-lg">img</div>
      <div className="flex flex-col gap-1 w-full h-2/5 px-5 py-2">
        {remaining > 0 ? (
          <p className="text-xs font-bold text-amber-600">{`${remaining}/${quantity}`}</p>
        ) : (
          <p className="text-xs font-bold text-amber-600">Sold out</p>
        )}
        <div className="w-full bg-stone-200 rounded-full h-2.5 dark:bg-stone-300">
          <div
            className="bg-amber-600 h-2.5 rounded-full"
            style={{ width: `${remainingBar}%` }}
          />
        </div>
        <div className="flex flex-row justify-between mt-2">
          <p className="text-lg font-bold text-gray-800">{productSetName}</p>
          <p className="text-lg font-bold text-gray-500">{`#${productSetId}`}</p>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-red-700">
            <HiLocationMarker size={16} />
          </div>
          <p className="text-sm text-gray-800">{farmName}</p>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
