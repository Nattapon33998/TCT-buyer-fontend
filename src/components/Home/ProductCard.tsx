import React, { useCallback } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { useSelectGroupProductIdState } from "../../state/SelectProductState/hook";

const ProductCard: React.FC<{
  id: number;
  name: string;
  amount: string;
  unit: string;
  farmAddress: string;
  farmName: string;
  farmerAddress: string;
  setId: number;
  productIndex: number;
}> = ({
  id,
  name,
  amount,
  unit,
  farmAddress,
  farmName,
  farmerAddress,
  setId,
  productIndex,
}) => {
  // const remainingBar = (remaining / quantity) * 100;
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

  const selectThisGroup = useCallback(() => {
    updateSelectProductIndex({ productIndex });
    changePage("/product/");
  }, [changePage, productIndex, updateSelectProductIndex]);

  return (
    <button
      className="flex flex-col items-center w-64 h-72 bg-stone-100 rounded-lg drop-shadow-md"
      onClick={selectThisGroup}
    >
      <div className="w-full h-3/5 bg-red-300 rounded-t-lg">img</div>
      <div className="flex flex-col gap-1 w-full h-2/5 px-5 py-2">
        <div className="flex flex-row justify-between mt-2">
          <p className="text-lg font-bold text-gray-800">{name}</p>
          <p className="text-lg font-bold text-gray-500">{`#${id}`}</p>
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
