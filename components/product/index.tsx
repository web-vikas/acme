"use client";

import React from "react";
import Images from "./Images";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import Additional from "./Additional";
import { Select, SelectItem } from "@nextui-org/select";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import Link from "next/link";
import { UsersIcon } from "../icons/breadcrumb/users-icon";

const NewProduct = () => {
  return (
    <>
      <div className="flex justify-between mb-3 items-center gap-2">
        <ul className="flex">
          <li className="flex gap-2">
            <HouseIcon />
            <Link href={"/admin"}>
              <span>Home</span>
            </Link>
            <span> / </span>
          </li>

          <li className="flex gap-2">
            <UsersIcon />
            <span>Products</span>
            <span> / &nbsp; </span>
          </li>
          <li className="flex gap-2">
            <span>New</span>
          </li>
        </ul>
        <Select placeholder="Type" className="max-w-sm" aria-label="product type">
          <SelectItem key="active">T-Shirt</SelectItem>
          <SelectItem key="passive">Smartphone</SelectItem>
        </Select>
      </div>
      <div className="flex gap-2 flex-col md:flex-row mb-3">
        <Images />
        <div className="flex flex-col w-full gap-2">
          <ProductInfo />
          <ProductDescription />
        </div>
      </div>
      <Additional />
    </>
  );
};

export default NewProduct;
