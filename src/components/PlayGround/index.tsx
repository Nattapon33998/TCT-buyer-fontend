import React, { useEffect } from "react";

import { useEtherBalance, useCall, useEthers } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import productContract from "./productContract.json";
import { Contract } from "ethers";

const productContractInterface = new Interface(productContract);
const contractAddress = "0xDAb138B57CF7d669Ef9753bB71a7Bfe3947d9bD8";
const contract = new Contract(contractAddress, productContractInterface);

const Balance = () => {
  const { value, error } =
    useCall({ contract, method: "totalSupply", args: [] }) ?? {};

  if (error) {
    return <div> {error.message} </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }
  return <div> Balance: {parseInt(value[0]._hex, 16)} </div>;
};

const BalanceOf = () => {
  const { account } = useEthers();
  const { value, error } =
    useCall({ contract, method: "balanceOf", args: [account ?? ""] }) ?? {};

  if (error) {
    // console.log(error.message);
    return <div> fail to load </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }
  return <div> Balance: {parseInt(value[0]._hex, 16)} </div>;
};

const PlayGround: React.FC = () => {
  return (
    <div>
      <p>Play ground</p>
      <Balance />
      <BalanceOf />
    </div>
  );
};

export default PlayGround;
