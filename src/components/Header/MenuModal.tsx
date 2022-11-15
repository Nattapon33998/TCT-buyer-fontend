import React from "react";
import { useEthers, shortenAddress } from "@usedapp/core";
import { useNavigate } from "react-router-dom";
import { Modal } from "../uikits/Modal";

const MenuModal: React.FC<{
  isMenuModalOpen: any;
  handleMenuModalClose: any;
  handleClaimNftModalOpen: any;
}> = ({ isMenuModalOpen, handleMenuModalClose, handleClaimNftModalOpen }) => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  const activateWallet = () => {
    if (account) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  };

  let navigate = useNavigate();
  const changePage = (path: string): void => {
    navigate(path);
  };

  const claimProduct = () => {
    handleMenuModalClose();
    handleClaimNftModalOpen();
  };

  const homeClick = () => {
    changePage("/");
    handleMenuModalClose();
  };

  return (
    <Modal
      isOpen={isMenuModalOpen}
      size={"sm"}
      onRequestClose={handleMenuModalClose}
    >
      <div className="flex flex-col">
        <div className="flex flex-col justify-center">
          <button
            className="flex flex-row items-center hover:bg-gray-200 text-gray-500 hover:text-emerald-800 font-bold w-full h-12 ease-in-out duration-200 gap-1"
            onClick={homeClick}
          >
            <p className="px-4">Home</p>
          </button>
          <button
            className="flex flex-row items-center  hover:bg-gray-200 text-gray-500 hover:text-emerald-800 font-bold w-full h-12 ease-in-out duration-200 gap-1"
            onClick={claimProduct}
          >
            <p className="px-4">Clame product</p>
          </button>
          <button
            className="flex flex-row items-center  hover:bg-gray-200 text-gray-500 hover:text-emerald-800 font-bold w-full h-12 ease-in-out duration-200 gap-1"
            onClick={activateWallet}
          >
            <p className="px-4">
              {account ? (
                <p>{shortenAddress(account)}</p>
              ) : (
                <p>Connect Wallet</p>
              )}
            </p>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MenuModal;
