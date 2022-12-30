import React from "react";

import { useLogs, shortenAddress } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import { ProductContractAddress } from "../../../../constants/contractAddress";
import productContract from "../../../../constants/contractAbis/productContract.json";
import { Contract } from "ethers";

const HistoryCard: React.FC<{ ownerAddress: string; isLatest: boolean }> = ({
  ownerAddress,
  isLatest,
}) => {
  //   console.log(ownerAddress);
  return (
    <>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-emerald-200 rounded-full ring-8 ring-white ">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-emerald-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          {shortenAddress(ownerAddress)}

          {isLatest && (
            <span className="bg-amber-200 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Latest
            </span>
          )}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
          Delivered on December 8th, 2021
        </time>
        <p className="text-base font-normal text-gray-400">
          รับผลผลิตทางการเกษตรจาก Big C ลาดกระบัง
        </p>
      </li>
    </>
  );
};

export default HistoryCard;
