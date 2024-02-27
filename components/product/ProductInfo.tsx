import { Card, Code } from "@nextui-org/react";
import React from "react";

const ProductInfo = () => {
  return (
    <Card>
      <div className="min-h-unit-24 text-center flex flex-col m-2">
        ProductInfo
        <Code>
          SKU ID
          <br />
          Listing Status = dropdown
          <br />
          Price - MRP
          <br />
          Price - Selling
          <br />
          Stock <br />
          Delivery Charge
          <br />
          Manufacturing Details
          <br />
          Country - dropdown
        </Code>
      </div>
    </Card>
  );
};

export default ProductInfo;
