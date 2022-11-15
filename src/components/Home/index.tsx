import React from "react";
import ProductCard from "./ProductCard";

import { useProductState } from "../../state/ProductState/hook";

// import ClaimNftModal from "../Header/ClaimNftModal";

const Home: React.FC = () => {
  const { productsData } = useProductState();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 px-50 gap-8">
      <p className="text-3xl font-bold text-gray-700">Your NFT</p>
      <div className="grid  2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-content-center w-fit  px-20 lg:gap-x-5 md:gap-x-10 gap-y-10">
        {productsData.map((product: any, index: number) => (
          <div className="flex justify-center">
            <ProductCard key={product.id} {...product} productIndex={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
