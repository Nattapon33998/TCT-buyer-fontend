import React from "react";
import { Modal } from "../uikits/Modal";
import { IoMdClose } from "react-icons/io";

const ClaimNftModal: React.FC<{
  claimNftModalIsOpen: boolean;
  handleClaimNftModalClose: any;
}> = ({ claimNftModalIsOpen, handleClaimNftModalClose }) => {
  return (
    <Modal
      isOpen={claimNftModalIsOpen}
      size={"lg"}
      onRequestClose={handleClaimNftModalClose}
    >
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
            required
          />
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="flex flex-row items-center justify-center bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 border-2 hover:border-2 hover:border-emerald-800 font-bold w-36 h-12 rounded-lg ease-in-out duration-200 gap-1"
            onClick={handleClaimNftModalClose}
          >
            <p>Claim product</p>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ClaimNftModal;
