import React from "react";
import { Modal } from "../../uikits/Modal";
import { IoMdClose } from "react-icons/io";

const ConsumeProductModal: React.FC<{
  isConsumeProductModalOpen: boolean;
  handleConsumeProductModalClose: any;
}> = ({ isConsumeProductModalOpen, handleConsumeProductModalClose }) => {
  return (
    <Modal
      isOpen={isConsumeProductModalOpen}
      size={"lg"}
      onRequestClose={handleConsumeProductModalClose}
    >
      <div className="flex flex-col gap-5 px-8 py-2">
        <div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-gray-800">
              ต้องการบริโภคสินค้านี้ใช่หรือไม่
            </p>
            <button
              className="flex flex-row items-center justify-center hover:bg-red-700 text-gray-500 hover:text-white w-8 h-8 rounded-lg ease-in-out duration-200 gap-1"
              onClick={handleConsumeProductModalClose}
            >
              <IoMdClose size={16} />
            </button>
          </div>
          <p className="text-sm font-medium text-red-500 ">
            *หลังจากบริโภคสินค้าไปแล้วจะไม่สามารถโอนย้ายสินค้าไปให้ผู้อื่นได้*
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="flex flex-row items-center justify-center bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 border-2 hover:border-2 hover:border-emerald-800 font-bold w-fit h-12 rounded-lg ease-in-out duration-200 gap-1"
            onClick={handleConsumeProductModalClose}
          >
            <p className="px-4">Confirm consume</p>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConsumeProductModal;
