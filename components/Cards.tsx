"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card className="py-2">
        <CardBody className="max-w-sm rounded overflow-hidden  ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl py-2 bg-fuchsia-950"
            src="/shoes-1.webp"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-1">
          <p className="text-sm uppercase font-bold">Nike Adapt BB 2.0</p>
          <small className="text-default-500 text-xs">
            Consistent, customized fit, game-changing.
          </small>
          <h4 className="font-bold text-base">
            $279.97 <span className="line-through text-xs text-gray-400">$350</span>{" "}
            <span className="text-fuchsia-700">20% off</span>
          </h4>
          <div className="flex gap-4  justify-between items-center text-center mb-2">
            <div className="rounded-full   w-7 h-7 bg-fuchsia-600">
              <span className="text-xs font-semibold">XS</span>
            </div>
            <div>
              <span className="text-xs">S</span>
            </div>
            <div>
              <span className="text-xs">M</span>
            </div>
            <div>
              <span className="text-xs">L</span>
            </div>
            <div>
              <span className="text-xs">XL</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-3xl bg-fuchsia-600" variant="shadow">
              Buy now
            </Button>
            <Button className="rounded-3xl" variant="bordered" color="secondary">
             Add to bag
            </Button>
          </div>
        </CardHeader>
      </Card>
      <Card className="py-2">
        <CardBody className="max-w-sm rounded overflow-hidden  ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl py-2 bg-fuchsia-950"
            src="/shoes-1.webp"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-1">
          <p className="text-sm uppercase font-bold">Nike Adapt BB 2.0</p>
          <small className="text-default-500 text-xs">
            Consistent, customized fit, game-changing.
          </small>
          <h4 className="font-bold text-base">
            $279.97 <span className="line-through text-xs text-gray-400">$350</span>{" "}
            <span className="text-fuchsia-700">20% off</span>
          </h4>
          <div className="flex gap-4  justify-between items-center text-center mb-2">
            <div className="rounded-full  w-7 h-7 bg-fuchsia-600">
              <span className="text-xs font-semibold">XS</span>
            </div>
            <div>
              <span className="text-xs">S</span>
            </div>
            <div>
              <span className="text-xs">M</span>
            </div>
            <div>
              <span className="text-xs">L</span>
            </div>
            <div>
              <span className="text-xs">XL</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-3xl bg-fuchsia-600" variant="shadow">
              Buy now
            </Button>
            <Button className="rounded-3xl" variant="bordered" color="secondary">
             Add to bag
            </Button>
          </div>
        </CardHeader>
      </Card>
      <Card className="py-2">
        <CardBody className="max-w-sm rounded overflow-hidden  ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl py-2 bg-fuchsia-950"
            src="/shoes-1.webp"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-1">
          <p className="text-sm uppercase font-bold">Nike Adapt BB 2.0</p>
          <small className="text-default-500 text-xs">
            Consistent, customized fit, game-changing.
          </small>
          <h4 className="font-bold text-base">
            $279.97 <span className="line-through text-xs text-gray-400">$350</span>{" "}
            <span className="text-fuchsia-700">20% off</span>
          </h4>
          <div className="flex gap-4  justify-between items-center text-center mb-2">
            <div className="rounded-full   w-7 h-7 bg-fuchsia-600">
              <span className="text-xs font-semibold">XS</span>
            </div>
            <div>
              <span className="text-xs">S</span>
            </div>
            <div>
              <span className="text-xs">M</span>
            </div>
            <div>
              <span className="text-xs">L</span>
            </div>
            <div>
              <span className="text-xs">XL</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-3xl bg-fuchsia-600" variant="shadow">
              Buy now
            </Button>
            <Button className="rounded-3xl" variant="bordered" color="secondary">
             Add to bag
            </Button>
          </div>
        </CardHeader>
      </Card>
      <Card className="py-2">
        <CardBody className="max-w-sm rounded overflow-hidden  ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl py-2 bg-fuchsia-950"
            src="/shoes-1.webp"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-1">
          <p className="text-sm uppercase font-bold">Nike Adapt BB 2.0</p>
          <small className="text-default-500 text-xs">
            Consistent, customized fit, game-changing.
          </small>
          <h4 className="font-bold text-base">
            $279.97 <span className="line-through text-xs text-gray-400">$350</span>{" "}
            <span className="text-fuchsia-700">20% off</span>
          </h4>
          <div className="flex gap-4  justify-between items-center text-center mb-2">
            <div className="rounded-full   w-7 h-7 bg-fuchsia-600">
              <span className="text-xs font-semibold">XS</span>
            </div>
            <div>
              <span className="text-xs">S</span>
            </div>
            <div>
              <span className="text-xs">M</span>
            </div>
            <div>
              <span className="text-xs">L</span>
            </div>
            <div>
              <span className="text-xs">XL</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-3xl bg-fuchsia-600" variant="shadow">
              Buy now
            </Button>
            <Button className="rounded-3xl" variant="bordered" color="secondary">
             Add to bag
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
