import React from "react";
import ProductCard from "./ProductCard";

import { useCall, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "../../constants/contractAddress";
import productContract from "../../constants/contractAbis/productContract.json";

const ProductList: React.FC = () => {
  const productContractInterface = new Interface(productContract);
  const contract = new Contract(
    ProductContractAddress,
    productContractInterface
  );

  const { account } = useEthers();
  const { value, error } =
    useCall({ contract, method: "tokensOfOwner", args: [account ?? ""] }) ?? {};

  let productItems: any = [];

  if (error) {
    return <div> fail to load </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }

  for (let i = 0; i < value[0].length; i++) {
    productItems.push(parseInt(value[0][i]._hex, 16));
  }

  return (
    <>
      {productItems.map((item: any) => {
        return (
          <div className="flex justify-center" key={item}>
            <ProductCard productId={item} />
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
