import React from "react";

import {
  useCall,
  useEthers,
  useLogs,
  useContractFunction,
} from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import { Contract } from "ethers";

import productContractAbi from "../../constants/contractAbis/productContract.json";
import { ProductContractAddress } from "../../constants/contractAddress";

const productContractInterface = new Interface(productContractAbi);
const contract = new Contract(ProductContractAddress, productContractInterface);

const TotalSupply = () => {
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
  return <div> BalanceOf: {parseInt(value[0]._hex, 16)} </div>;
};

const ProductList = () => {
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
    <div>
      {productItems.map((item: any) => {
        return (
          <div key={item}>
            <ProductDetail id={item} />
          </div>
        );
      })}
    </div>
  );
};

const ProductDetail = (prop: any) => {
  // console.log(prop);
  const { value, error } =
    useCall({ contract, method: "getProduct", args: [prop.id] }) ?? {};

  // if (value) console.log(value[0]);
  if (error) {
    return <div> {error.message} </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }
  return (
    <div>
      ProductDetail : {value[0].name} {prop.id}
    </div>
  );
};

const Event = () => {
  const eventLog = useLogs({
    contract,
    event: "ProductOwner",
    args: [0],
  });

  const { value, error } = eventLog ?? {};

  if (error) {
    return <div> fail to load </div>;
  }

  if (!value) {
    return <div> Loading... </div>;
  }
  console.log(value);
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
  const { account } = useEthers();
  const productContractInterface = new Interface(productContractAbi);
  const productContract = new Contract(
    ProductContractAddress,
    productContractInterface
  );
  const callProductContract = useContractFunction(
    productContract,
    "batchTransferFrom"
  );

  const transferHandler = async () => {
    const tx = await callProductContract.send(
      account,
      "0x92165C98D0f24a0991348925aac8Cb155502A57A",
      [2],
      "31/12/2022"
    );
    console.log(tx);
  };

  return (
    <div>
      <p>Play ground</p>
      <TotalSupply />
      <BalanceOf />
      {/* <ProductDetail id={0} /> */}
      <Event />
      <ProductList />
      <button onClick={transferHandler}>Transfer</button>
    </div>
  );
};

export default PlayGround;
