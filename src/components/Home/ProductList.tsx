import React from "react";
import ProductCard from "./ProductCard";

import { useCall, useEthers } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "../../config/constants/addresses";
import productContract from "../../config/abis/productContract.json";

const ProductList: React.FC = () => {
  const productContractInterface = new Interface(productContract);
  const contract = new Contract(
    ProductContractAddress,
    productContractInterface
  );

  const { account } = useEthers();
  const { value } =
    useCall({ contract, method: "tokensOfOwner", args: [account ?? ""] }) ?? {};

  let productItems: any = [];

  if (!value) {
    return <div> Loading... </div>;
  }

  for (let i = 0; i < value[0].length; i++) {
    productItems.push(parseInt(value[0][i]._hex, 16));
  }

  return (
    <>
      {productItems &&
        productItems.map((item: any) => {
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
