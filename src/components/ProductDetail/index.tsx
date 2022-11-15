import React, { useState, useCallback } from "react";

import ProductDetailCard from "./productDetailCard";
import TransferProductModal from "./TransferProductModal";

const ProductDetail: React.FC = () => {
  const [isTransferProductModalOpen, setIsTransferProductModalOpen] =
    useState(false);

  const handleTransferProductModalOpen = useCallback(() => {
    setIsTransferProductModalOpen(true);
  }, []);

  const handleTransferProductModalClose = useCallback(() => {
    setIsTransferProductModalOpen(false);
  }, []);

  return (
    <div className="flex flex-row justify-center py-4 md:py-16 w-full">
      <ProductDetailCard
        handleTransferProductModalOpen={handleTransferProductModalOpen}
      />
      <TransferProductModal
        isTransferProductModalOpen={isTransferProductModalOpen}
        handleTransferProductModalClose={handleTransferProductModalClose}
      />
    </div>
  );
};

export default ProductDetail;
