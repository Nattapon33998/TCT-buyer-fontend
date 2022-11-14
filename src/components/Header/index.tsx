import React from "react";
import { useEthers, shortenAddress } from "@usedapp/core";
import { useNavigate } from "react-router-dom";
// import { Interface } from "@ethersproject/abi";

const Header: React.FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  let navigate = useNavigate();
  const changePage = (path: string): void => {
    navigate(path);
  };

  const activateWallet = () => {
    if (account) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  };

  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between p-2 border-b bg-emerald-800 md:h-16 h-24 px-6 w-full gap-2">
      <div className="text-white text-xl font-bold">TCT system</div>
      <button
        className="bg-amber-500 hover:bg-white text-sm text-white hover:text-amber-600 font-bold py-2 px-4 w-36 md:w-40 rounded-full ease-in-out duration-300"
        onClick={activateWallet}
      >
        <div className="flex flex-col justify-center items-center w-full h-full ">
          {account ? <p>{shortenAddress(account)}</p> : <p>Connect Wallet</p>}
        </div>
      </button>
    </div>
  );
};

export default Header;
