import React from "react";
import { HiLocationMarker } from "react-icons/hi";

import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "../../../constants/contractAddress";
import productContract from "../../../constants/contractAbis/productContract.json";
import { FarmContractAddress } from "../../../constants/contractAddress";
import farmContract from "../../../constants/contractAbis/farmContract.json";

const ProductInfo: React.FC<{ id: number }> = ({ id }) => {
  const productContractInterface = new Interface(productContract);
  const ProductContract = new Contract(
    ProductContractAddress,
    productContractInterface
  );
  const farmContractInterface = new Interface(farmContract);
  const FarmContract = new Contract(FarmContractAddress, farmContractInterface);

  const { value: productValue } =
    useCall({ contract: ProductContract, method: "getProduct", args: [id] }) ??
    {};

  const { value: farmValue } =
    useCall({
      contract: FarmContract,
      method: "getFarm",
      args: [productValue?.[0].farmAddress],
    }) ?? {};

  if (productValue && farmValue) {
    return (
      <div className="flex flex-col gap-1 w-full h-2/5 px-5 py-2">
        <div className="flex flex-row justify-between items-center mt-2">
          <p className="text-md font-bold text-gray-800">
            {productValue[0].name} {productValue[0].amount}{" "}
            {productValue[0].unit}
          </p>
          <p className="text-lg font-bold text-gray-500">{`#${id}`}</p>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-red-700">
            <HiLocationMarker size={16} />
          </div>
          <p className="text-sm text-gray-800">{farmValue[0].name}</p>
        </div>
      </div>
    );
  } else {
    return <div> Loading... </div>;
  }
};

export default ProductInfo;
