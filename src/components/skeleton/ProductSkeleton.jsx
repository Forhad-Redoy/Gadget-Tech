import React from "react";
import Container from "../shared/Contianer";

const ProductSkeleton = () => {
  return (
    <div>
      <Container>

      <div className=" animate-pulse bg-white/50 flex flex-col gap-4">
        <div className="h-48 w-full bg-gray-300 rounded-md"></div>
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
        <div className="h-10 w-full bg-gray-300 rounded"></div>
      </div>
      </Container>
    </div>
  );
};

export default ProductSkeleton;
