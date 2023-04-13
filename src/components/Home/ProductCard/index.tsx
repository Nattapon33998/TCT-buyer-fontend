import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";

import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

// import { ProductContractAddress } from "../../../constants/contractAddress";
import productContractAbi from "../../../config/abis/productContract.json";
import farmContractAbi from "../../../config/abis/farmContract.json";
import {
  ProductContractAddress,
  FarmContractAddress,
} from "../../../config/constants/addresses";

import { useSelectGroupProductIdState } from "../../../state/SelectProductState/hook";

const ProductCard: React.FC<{
  productId: number;
  status: string;
}> = ({ productId, status }) => {
  const {
    reducers: { updateSelectProductId },
  } = useSelectGroupProductIdState();

  let navigate = useNavigate();
  const changePage = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const selectThisItem = useCallback(() => {
    updateSelectProductId({ productIndex: productId });
    changePage("/product/");
  }, [changePage, productId, updateSelectProductId]);

  const productContractInterface = new Interface(productContractAbi);
  const ProductContract = new Contract(
    ProductContractAddress,
    productContractInterface
  );
  const farmContractInterface = new Interface(farmContractAbi);
  const FarmContract = new Contract(FarmContractAddress, farmContractInterface);

  const { value: productValue } =
    useCall({
      contract: ProductContract,
      method: "getProduct",
      args: [productId],
    }) ?? {};

  const { value: farmValue } =
    useCall({
      contract: FarmContract,
      method: "getFarm",
      args: [productValue?.[0].farmAddress],
    }) ?? {};

  if (status === "fresh" && productValue && productValue[0].consumed)
    return null;

  if (status === "consumed" && productValue && !productValue[0].consumed)
    return null;

  return (
    <button
      className="flex flex-col items-center w-64 h-72 bg-stone-100 rounded-lg drop-shadow-md"
      onClick={selectThisItem}
    >
      {productValue && farmValue && (
        <>
          <div className="flex flex-row justify-center w-full h-3/5 bg-white rounded-t-lg ">
            <img
              className="h-full rounded-t-lg"
              src={productValue[0].url}
              alt="product img"
            />
          </div>
          <div className="flex flex-col gap-1 w-full h-2/5 px-5 py-2">
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-md font-bold text-gray-800">
                {productValue[0].name} {productValue[0].amount}{" "}
                {productValue[0].unit}
              </p>
              <p className="text-lg font-bold text-gray-500">{`#${productId}`}</p>
            </div>
            <div className="flex flex-row gap-1 ">
              <div className="text-red-700">
                <HiLocationMarker size={16} />
              </div>
              <p className="text-sm text-gray-800">{farmValue[0].name}</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
};

export default ProductCard;
