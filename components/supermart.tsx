import React from "react";
import { Link, Image } from "@nextui-org/react";

export const Supermart = () => {
  return (
    <div className="sm:p-5 p-0 overflow-x-auto">
      <div className="bg-gray-50 flex gap-9 flex-row w-[900px] sm:w-full  z-20 justify-around items-center p-5">
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image
                src="grocery.webp"
                alt="Grocery"
                className="w-full h-full"
              />
            </div>
            <span className="mt-1 text-sm sm:text-base">Grocery</span>
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
            <span className="mt-1 text-sm sm:text-base">Mobiles</span>
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
            <span className="mt-1 text-sm sm:text-base">Fashion</span>
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
            <span className="mt-1 text-sm sm:text-base">Electronics</span>
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
            <span className="mt-1 text-sm sm:text-base">Home & Furniture</span>
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
            <span className="mt-1 text-sm sm:text-base">Appliances</span>
          </div>
        </Link>
        <Link className="text-black font-semibold">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16">
              <Image src="travel.webp" alt="Travel" className="w-full h-full" />
            </div>
            <span className="mt-1 text-sm sm:text-base">Travel</span>
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
            <span className="mt-1 text-sm sm:text-base ">Beauty, Toys & More</span>
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
            <span className="mt-1 text-sm sm:text-base">Two Wheelers</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
