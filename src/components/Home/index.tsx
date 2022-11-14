import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useCall, useEthers, useContractCall } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import { BigNumber, Contract } from "ethers";

import { useProductState } from "../../state/ProductState/hook";

// import ProductContractAbi from "../../config/abis/ProductContractAbi.json";
// import ERC20Interface from "../../config/abis/ERC20Interface.json";
// import { ProductConractAddress } from "../../config/constants/addresses";

const Home: React.FC = () => {
  const { productsGroupData } = useProductState();
  console.log(productsGroupData);
  const { library, account } = useEthers();

  // const productContractInterface = new Interface(ProductContractAbi);
  // const IERC20Interface = new Interface(ERC20Interface);

  // const { value, error } =
  //   useCall({
  //     contract: new Contract(ProductConractAddress, productContractInterface),
  //     method: "getSetIdCounter",
  //     args: [],
  //   }) ?? {};

  // const result = useCall(
  //   account && {
  //     contract: new Contract(ProductConractAddress, productContractInterface),
  //     method: "getSetIdCounter",
  //     args: [],
  //   }
  // );
  const tokenAddress = "0xfD41d89a194cF49eaa54ec9d4Ef773CB0E0dAbFA";
  // const tokenContract = new Contract(tokenAddress, IERC20Interface);

  // const { value, error } =
  //   useCall(
  //     tokenAddress && {
  //       contract: tokenContract,
  //       method: "totalSupply",
  //       args: [],
  //     }
  //   ) ?? {};

  // function useTotalSupply(
  //   tokenAddress: string | undefined
  // ): BigNumber | undefined {
  //   const { value, error } =
  //     useCall(
  //       tokenAddress && {
  //         contract: new Contract(tokenAddress, IERC20Interface),
  //         method: "totalSupply",
  //         args: [],
  //       }
  //     ) ?? {};
  //   if (error) {
  //     console.error(error.message);
  //     return undefined;
  //   }
  //   return value?.[0];
  // }

  // const totalSupply = useTotalSupply(tokenAddress);

  // useEffect(() => {
  //   console.log({ account });
  //   console.log({ tokenAddress });
  //   console.log(totalSupply);
  // }, [totalSupply]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 px-50 gap-8">
      <p className="text-3xl font-bold text-gray-700">Your NFT</p>
      <div className="grid  2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-content-center w-fit  px-20 lg:gap-x-5 md:gap-x-10 gap-y-10">
        {productsGroupData.map((productGroup: any, index: number) => (
          <div className="flex justify-center">
            <ProductCard
              key={productGroup.productSetId}
              {...productGroup}
              groupIndex={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
