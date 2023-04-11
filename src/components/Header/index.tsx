import React, { useState, useCallback } from "react";
import { useEthers, shortenAddress } from "@usedapp/core";
import { useNavigate } from "react-router-dom";
import MenuModal from "./MenuModal";
import ClaimNftModal from "./ClaimNftModal";

const Header: React.FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [claimNftModalIsOpen, setClaimNftModalIsOpen] =
    useState<boolean>(false);
  const [isTransactionPending, setIsTransactionPending] = useState(false);

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

  const handleMenuModalOpen = useCallback(() => {
    setIsMenuModalOpen(true);
  }, []);

  const handleMenuModalClose = useCallback(() => {
    setIsMenuModalOpen(false);
  }, []);

  const handleClaimNftModalOpen = useCallback(() => {
    setClaimNftModalIsOpen(true);
  }, []);

  const handleClaimNftModalClose = useCallback(() => {
    if (!isTransactionPending) setClaimNftModalIsOpen(false);
  }, [isTransactionPending]);

  return (
    <div className="flex md:flex-row items-center justify-between p-2 border-b bg-emerald-800 h-16 px-8 w-full gap-2">
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        TCT system
      </span>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-white hover:text-emerald-800 rounded-lg md:hidden hover:bg-white ease-in-out duration-200"
        onClick={handleMenuModalOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <div className="py-2 px-8">
          <button
            className="text-md font-bold text-white hover:text-amber-400 px-5 ease-in-out duration-300"
            onClick={() => changePage("/")}
          >
            <p>Home</p>
          </button>
          <button
            className="text-md font-bold text-white hover:text-amber-400 px-5 ease-in-out duration-300"
            onClick={handleClaimNftModalOpen}
          >
            <p>Claim product</p>
          </button>
          <button
            className="bg-amber-500 hover:bg-white text-sm text-white hover:text-amber-600 font-bold py-2 px-4 w-36 md:w-40 rounded-full ease-in-out duration-300"
            onClick={activateWallet}
          >
            <div className="flex flex-col justify-center items-center w-full h-full ">
              {account ? (
                <p>{shortenAddress(account)}</p>
              ) : (
                <p>Connect Wallet</p>
              )}
            </div>
          </button>
        </div>
      </div>
      <MenuModal
        isMenuModalOpen={isMenuModalOpen}
        handleMenuModalClose={handleMenuModalClose}
        handleClaimNftModalOpen={handleClaimNftModalOpen}
      />

      <ClaimNftModal
        claimNftModalIsOpen={claimNftModalIsOpen}
        handleClaimNftModalClose={handleClaimNftModalClose}
        setIsTransactionPending={setIsTransactionPending}
      />
    </div>
  );
};

export default Header;
