import React, { useCallback, useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";

import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "../../../constants/contractAddress";
import productContract from "../../../constants/contractAbis/productContract.json";

const productContractInterface = new Interface(productContract);
const contract = new Contract(ProductContractAddress, productContractInterface);

const ProductInfo: React.FC<{ id: number }> = ({ id }) => {
  const { value } =
    useCall({ contract, method: "getProduct", args: [id] }) ?? {};

  if (value) {
    return (
      <div className="flex flex-col gap-1 w-full h-2/5 px-5 py-2">
        <div className="flex flex-row justify-between mt-2">
          <p className="text-lg font-bold text-gray-800">{value[0].name}</p>
          <p className="text-lg font-bold text-gray-500">{`#${id}`}</p>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="text-red-700">
            <HiLocationMarker size={16} />
          </div>
          {/* <p className="text-sm text-gray-800">{farmName}</p> */}
          <p className="text-sm text-gray-800">สวนกล้วย</p>
        </div>
      </div>
    );
  } else {
    return <div> Loading... </div>;
  }
};

export default ProductInfo;
