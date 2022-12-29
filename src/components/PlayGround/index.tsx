import React, { useEffect } from "react";

import { useEtherBalance, useCall, useEthers, useLogs } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import productContract from "./productContract.json";
import { Contract } from "ethers";

const productContractInterface = new Interface(productContract);
const contractAddress = "0x3895cd100932925Ab586ec109AF2120D4d70ab92";
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
  return <div> Total Supply: {parseInt(value[0]._hex, 16)} </div>;
};

const BalanceOf = () => {
  const { account } = useEthers();
  const { value, error } =
    useCall({ contract, method: "balanceOf", args: [account ?? ""] }) ?? {};

  if (error) {
    return <div> fail to load </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }
  return <div> Balance: {parseInt(value[0]._hex, 16)} </div>;
};

const Event = () => {
  const eventLog = useLogs({
    contract,
    event: "ProductOwner",
    args: [0],
  });

  const { value, error } = eventLog ?? {};
  console.log("Log event");
  if (value) {
    for (let i = 0; i < value.length; i++) {
      console.log(`เจ้าของคนที่ ${i + 1} : ${value[i].data.owner}`);
    }
  }

  if (error) {
    return <div> fail to load </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }
  return (
    <div>
      {value ? (
        value.map((item, index) => {
          return (
            <div key={index}>
              เจ้าของคนที่ {index + 1} : {item.data.owner}
            </div>
          );
        })
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
};

const PlayGround: React.FC = () => {
  return (
    <div>
      <p>Play ground</p>
      <Balance />
      <BalanceOf />
      <Event />
    </div>
  );
};

export default PlayGround;
