import React, { useEffect } from "react";

import { useEtherBalance, useCall } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import productContract from "./productContract.json";
import { Contract } from "ethers";

const productContractInterface = new Interface(productContract);
const contractAddress = "0xDAb138B57CF7d669Ef9753bB71a7Bfe3947d9bD8";
function useTotalSupply(): any {
  const { value, error } =
    useCall(
      contractAddress && {
        contract: new Contract(contractAddress, productContractInterface),
        method: "totalSupply",
        args: [],
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}

const PlayGround: React.FC = () => {
  const balance = useTotalSupply();

  // const useGetSupply = () => {
  //   const { value, error } =
  //     useCall(
  //       contractAddress && {
  //         contract: new Contract(contractAddress, productContractInterface),
  //         method: "totalSupply",
  //         args: [],
  //       }
  //     ) ?? {};
  //   if (error) {
  //     console.error(error.message);
  //     // return undefined;
  //   }
  //   // return value?.[0];
  //   console.log(value);
  // };

  useEffect(() => {
    console.log(balance);
  }, [balance]);

  return (
    <div>
      {/* play PlayGround */}
      {balance}
      {/* <button onClick={balance}>supply</button> */}
    </div>
  );
};

export default PlayGround;
