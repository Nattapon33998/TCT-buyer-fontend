import React, { useState, useCallback } from "react";

import ProductDetailCard from "./productDetailCard";
import TransferProductModal from "./modals/TransferProductModal";
import ConsumeProductModal from "./modals/ConsumeProductModal";

const ProductDetail: React.FC = () => {
  const [isTransferProductModalOpen, setIsTransferProductModalOpen] =
    useState(false);
  const [isConsumeProductModalOpen, setIsConsumeProductModalOpen] =
    useState(false);
  const [isTransactionPending, setIsTransactionPending] = useState(false);

  const handleTransferProductModalOpen = useCallback(() => {
    setIsTransferProductModalOpen(true);
  }, []);

  const handleTransferProductModalClose = useCallback(() => {
    if (!isTransactionPending) setIsTransferProductModalOpen(false);
  }, [isTransactionPending]);

  const handleConsumeProductModalOpen = useCallback(() => {
    setIsConsumeProductModalOpen(true);
  }, []);

  const handleConsumeProductModalClose = useCallback(() => {
    setIsConsumeProductModalOpen(false);
  }, []);

  return (
    <div className="flex flex-row justify-center py-4 md:py-16 w-full">
      <ProductDetailCard
        handleTransferProductModalOpen={handleTransferProductModalOpen}
        handleConsumeProductModalOpen={handleConsumeProductModalOpen}
      />
      <ConsumeProductModal
        isConsumeProductModalOpen={isConsumeProductModalOpen}
        handleConsumeProductModalClose={handleConsumeProductModalClose}
      />
      <TransferProductModal
        isTransferProductModalOpen={isTransferProductModalOpen}
        handleTransferProductModalClose={handleTransferProductModalClose}
        setIsTransactionPending={setIsTransactionPending}
      />
    </div>
  );
};

export default ProductDetail;
