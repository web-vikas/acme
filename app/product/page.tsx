import React from "react";
import Image from "next/image";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Rating from "@mui/material/Rating";

export default function div() {
  const colors = [
    "foreground",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <Image
                src="/earburd.png"
                width={450}
                height={450}
                alt="earburd"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            {/* <div className="flex flex-col flex-wrap gap-4">
              {colors.map((color) => (
                <Breadcrumbs key={color} className="text-red-900">
                  <BreadcrumbItem>Home</BreadcrumbItem>
                  <BreadcrumbItem>Music</BreadcrumbItem>
                  <BreadcrumbItem>Artist</BreadcrumbItem>
                  <BreadcrumbItem>Album</BreadcrumbItem>
                  <BreadcrumbItem>Song</BreadcrumbItem>
                </Breadcrumbs>
              ))}
            </div> */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Redmi Buds 4 Active - Air White 12mm Drivers Premium Sound
              Quality Up to 30 Hours Battery Life Google Fast Pair IPX4
              Bluetooth 5.3 ENC Up to 60ms Low Latency Mode App Support
            </h1>
            <Rating name="size-large" defaultValue={4} size="large" />
            <div className="flex mb-4">
              <div className="mr-4">
                <p className="font-bold text-gray-700 dark:text-gray-300 text-2xl">
                  Price 1500
                </p>
              </div>
              <div>
                <p className="text-green-600 dark:text-gray-300">
                  In Stock
                </p>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-bold text-gray-700 dark:text-gray-300">
                Select Color:
              </p>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-bold text-gray-700 dark:text-gray-300">
                Select Size
              </p>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-700 dark:text-gray-300">
                Product Description
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Introducing Redmi Buds 4 Active the ultimate companion for
                immersive audio enthusiasts. With its powerful 12mm Bass Pro
                drivers these earbuds deliver an unparalleled audio experience
                providing deep rich bass and crisp clear highs. Whether you re
                enjoying your favourite music or engaging in intense gaming
                sessions Redmi Buds 4 Active ensures you feel the rhythm like
                never before.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
