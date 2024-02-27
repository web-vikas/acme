import React from "react";
import Images from "./Images";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import Additional from "./Additional";

const NewProduct = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <Images />
      <div className="flex flex-col w-full gap-2">
        <ProductInfo />
        <ProductDescription />
        <Additional />
      </div>
    </div>
  );
};

export default NewProduct;
