import React from "react";

import { FaTractor } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

import FarmerDetail from "./FarmerDetail";
import FarmDetail from "./FarmDetail";
import ProductTimeLine from "../ProductTimeLine";

import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { ProductContractAddress } from "../../../constants/contractAddress";
import productContract from "../../../constants/contractAbis/productContract.json";

import { useSelectGroupProductIdState } from "../../../state/SelectProductState/hook";

const ProductDetailCard: React.FC<{
  handleTransferProductModalOpen: any;
  handleConsumeProductModalOpen: any;
}> = ({ handleTransferProductModalOpen, handleConsumeProductModalOpen }) => {
  const { selectProductId } = useSelectGroupProductIdState();
  const productContractInterface = new Interface(productContract);
  const contract = new Contract(
    ProductContractAddress,
    productContractInterface
  );

  const { value } =
    useCall({ contract, method: "getProduct", args: [selectProductId] }) ?? {};

  if (!value) {
    return <div> Loading... </div>;
  }

  return (
    <div className="flex flex-col items-center w-fit h-fit bg-stone-100 rounded-lg drop-shadow-xl">
      <div className="flex flex-col p-3 lg:p-10 w-full gap-2">
        <div className="flex flex-col lg:grid lg:grid-cols-5  lg:gap-8 gap-4">
          <div className="col-start-1 col-end-3">
            <div className="flex flex-col gap-4">
              <div className="bg-red-300 rounded-lg h-72 lg:w-96 w-full">
                <p>Img</p>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2 text-gray-700">
                  <FaTractor size={26} />
                  <p className="text-md font-bold ">
                    {`เก็บเกี่ยววันที่ ${new Date().toLocaleDateString()}`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 text-gray-700">
                  <MdDescription size={26} />
                  <p className="text-md font-bold">รายละเอียดสินค้า</p>
                </div>
                <div className="ml-8 text-gray-700">
                  <p>ชื่อสินค้า : {value[0].name}</p>
                  <p>จำนวน : {value[0].amount}</p>
                  <p>หน่วย : {value[0].unit}</p>
                  <p>รหัสสินค้า : {selectProductId}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-6 w-full h-full">
            <div className="flex flex-col gap-4">
              <FarmerDetail farmerAddress={value[0].farmerAddress} />
              <FarmDetail farmAddress={value[0].farmAddress} />
            </div>
          </div>
        </div>

        <hr className="my-2 bg-gray-800"></hr>
        <ProductTimeLine />
        <div className="flex flex-row justify-center py-5 gap-4">
          <button
            className="flex flex-row items-center justify-center bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 border-2 hover:border-2 hover:border-emerald-800 font-bold md:w-32 w-28 h-12 rounded-lg ease-in-out duration-200"
            onClick={handleConsumeProductModalOpen}
          >
            <p>Consume</p>
          </button>
          <button
            className="flex flex-row items-center justify-center bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 hover:border-2 hover:border-amber-500 font-bold md:w-32 w-28 h-12 rounded-lg ease-in-out duration-200"
            onClick={handleTransferProductModalOpen}
          >
            <p>Transfer</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
