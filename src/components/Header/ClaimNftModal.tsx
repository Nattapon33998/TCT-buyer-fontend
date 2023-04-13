import React, { useEffect, useState } from "react";
import { Modal } from "../uikits/Modal";
import { IoMdClose } from "react-icons/io";

import { useCall, useEthers, useContractFunction } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import { Contract } from "ethers";

import marketContractAbi from "../../config/abis/marketContract.json";
import {
  MarketContractAddress,
  // ProductContractAddress,
} from "../../config/constants/addresses";

const ClaimNftModal: React.FC<{
  claimNftModalIsOpen: boolean;
  handleClaimNftModalClose: any;
  setIsTransactionPending: any;
}> = ({
  claimNftModalIsOpen,
  handleClaimNftModalClose,
  setIsTransactionPending,
}) => {
  //------------------Insert Product ID------------------
  const [input, setInput] = useState("");
  const inputProductId = (s: string) => {
    const parts = s.split(",");
    const result: number[] = [];
    for (const part of parts) {
      if (part) {
        if (part.includes("-")) {
          const [start, end] = part.split("-");
          result.push(
            ...[...Array(+end - +start + 1)].map((_, i) => +start + i)
          );
        } else {
          result.push(+part);
        }
      }
    }
    return result;
  };
  //------------------Sign transaction------------------

  const [transactionStatus, setTransactionStatus] = useState<string>("");
  const [tansactionHash, setTransactionHash] = useState<string | undefined>("");
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  const dateStamp = `${day}/${month}/${year}`;

  const marketContractInterface = new Interface(marketContractAbi);
  const marketContract = new Contract(
    MarketContractAddress,
    marketContractInterface
  );
  const { state, send } = useContractFunction(marketContract, "claimProduct");

  const sendToShelfHandler = async () => {
    const tx = await send(inputProductId(input), dateStamp);
    setTransactionHash(tx?.transactionHash);
  };

  const closeTransactionHandle = () => {
    handleClaimNftModalClose();
    setTransactionStatus("");
  };

  useEffect(() => {
    if (state.status === "Mining") {
      setIsTransactionPending(true);
      setTransactionStatus("pending");
    }
    if (state.status === "Success") {
      setIsTransactionPending(false);
      setTransactionStatus("success");
    }
  }, [setIsTransactionPending, state.status]);

  return (
    <Modal
      isOpen={claimNftModalIsOpen}
      size={"lg"}
      onRequestClose={handleClaimNftModalClose}
    >
      <>
        {transactionStatus === "" && (
          <div className="flex flex-col gap-5 px-8 py-2">
            <div className="flex flex-row justify-between items-center">
              <p className="font-bold text-gray-800">
                กรุณาใส่รหัสสินค้าที่ต้องการรับ
              </p>
              <button
                className="flex flex-row items-center justify-center hover:bg-red-700 text-gray-500 hover:text-white w-8 h-8 rounded-lg ease-in-out duration-200 gap-1"
                onClick={handleClaimNftModalClose}
              >
                <IoMdClose size={16} />
              </button>
            </div>
            <div>
              <label
                htmlFor="product_name"
                className="block mb-1 text-sm font-medium text-gray-500 "
              >
                รหัสสินค้า
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product_name"
                type="text"
                placeholder="กรุณากรอกรหัสสินค้า"
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-center">
              <button
                className="flex flex-row items-center justify-center bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 border-2 hover:border-2 hover:border-emerald-800 font-bold w-36 h-12 rounded-lg ease-in-out duration-200 gap-1"
                onClick={sendToShelfHandler}
              >
                <p>Claim product</p>
              </button>
            </div>
          </div>
        )}
        {transactionStatus === "pending" && (
          <div className="flex flex-col justify-center items-center h-48 gap-5">
            <svg
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin fill-emerald-800"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <p className="text-gray-500 font-medium text-lg">
              Transactions are in progress.
            </p>
          </div>
        )}
        {transactionStatus === "success" && (
          <div className="flex flex-col justify-center items-center h-48 gap-3">
            <p className="text-gray-500 font-medium text-sm mt-6">
              {tansactionHash}
            </p>
            <p className="text-gray-500 font-medium text-lg">
              Transactions success
            </p>
            <button
              className="flex flex-row items-center justify-center bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 border-2 hover:border-2 hover:border-emerald-800 font-bold w-fit h-12 rounded-lg ease-in-out duration-200 gap-1 mt-4"
              onClick={closeTransactionHandle}
            >
              <p className="px-4">Close</p>
            </button>
          </div>
        )}
      </>
    </Modal>
  );
};

export default ClaimNftModal;
