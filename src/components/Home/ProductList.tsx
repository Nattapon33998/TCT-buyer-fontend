import React from "react";
import ProductCard from "./ProductCard";

import { useCall, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "../../config/constants/addresses";
import productContract from "../../config/abis/productContract.json";

const ProductList: React.FC<{ status: string }> = ({ status }) => {
  const productContractInterface = new Interface(productContract);
  const contract = new Contract(
    ProductContractAddress,
    productContractInterface
  );

  const { account } = useEthers();
  const { value } =
    useCall({ contract, method: "tokensOfOwner", args: [account ?? ""] }) ?? {};

  const { value: consumedList } =
    useCall({ contract, method: "getConsumedIdList", args: [account ?? ""] }) ??
    {};

  let productItems: any = [];
  let consumedItems: any = [];

  if (!value) {
    return <div> Loading... </div>;
  }

  if (consumedList) {
    for (let i = 0; i < consumedList[0].length; i++) {
      consumedItems.push(parseInt(consumedList[0][i]._hex, 16));
    }
  }

  for (let i = 0; i < value[0].length; i++) {
    if (!consumedItems.includes(parseInt(value[0][i]._hex, 16))) {
      productItems.push(parseInt(value[0][i]._hex, 16));
    }
  }

  return (
    <>
      {productItems &&
        status === "fresh" &&
        productItems.map((item: any) => {
          return (
            <div className="flex justify-center" key={item}>
              <ProductCard productId={item} status={status} />
            </div>
          );
        })}
      {productItems &&
        status === "consumed" &&
        consumedItems.map((item: any) => {
          return (
            <div className="flex justify-center" key={item}>
              <ProductCard productId={item} status={status} />
            </div>
          );
        })}
    </>
  );
};

export default ProductList;
