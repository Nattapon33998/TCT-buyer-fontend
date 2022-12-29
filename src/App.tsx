import React, { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";

import { useEtherBalance, useCall, useEthers, useLogs } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "./constants/contractAddress";
import productContract from "./constants/contractAbis/productContract.json";

import PlayGround from "./components/PlayGround";

import { useProductState } from "./state/ProductState/hook";

const App: React.FC = () => {
  const {
    productIdListData,
    reducers: { updateProductIdList },
  } = useProductState();
  const { account } = useEthers();

  const productContractInterface = new Interface(productContract);
  const contract = new Contract(
    ProductContractAddress,
    productContractInterface
  );

  const { value, error } =
    useCall({ contract, method: "tokensOfOwner", args: [account ?? ""] }) ?? {};

  let productItems: any = [];

  // useEffect(() => {
  //   if (value) {
  //     // console.log(value[0]);
  //     for (let i = 0; i < value[0].length; i++) {
  //       productItems.push(parseInt(value[0][i]._hex, 16));
  //     }
  //     updateProductIdList({ newData: productItems });
  //   }
  //   // console.log(productIdListData);
  // }, [productItems, updateProductIdList, value]);

  return (
    <div className="App flex min-h-screen flex-col overflow-hidden ">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<ProductDetail />} />
        <Route path="/test" element={<PlayGround />} />
      </Routes>
    </div>
  );
};

export default App;
