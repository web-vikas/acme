"use client";
import React from "react";
import { Link, Image } from "@nextui-org/react";

export const Supermart = () => {
  return (
    <div className=" overflow-x-auto ">
      <style>
        {`
          /* Hide WebKit scrollbars */
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="bg-gray-50 flex gap-9 flex-row w-[1000px] sm:w-full  z-20 justify-around items-center sm:p-4">
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="grocery.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Grocery</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="mobiles.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Mobiles</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="fashion.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Fashion</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="electronics.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Electronics</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="home&furniture.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Home & Furniture</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="appliances.webp"
                alt="Appliances"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Appliances</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image src="travel.webp" alt="Travel" className="w-full h-full" />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Travel</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="beautyToys.webp"
                alt="Beauty"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm ">Beauty, Toys & More</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="twoWheelers.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-xs sm:text-sm">Two Wheelers</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
