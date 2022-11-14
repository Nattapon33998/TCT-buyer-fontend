import React from "react";

import ProductDetailCard from "./productDetailCard";

const ProductDetail: React.FC = () => {
  return (
    <div className="flex flex-row justify-center py-4 md:py-16 w-full">
      <ProductDetailCard />
    </div>
  );
};

export default ProductDetail;
