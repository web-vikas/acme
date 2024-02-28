"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  RadioGroup,
  Radio,
  CardFooter,
} from "@nextui-org/react";
import { ShoppingCartIcon } from "lucide-react";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card className="pb-2">
        <CardHeader className="max-w-sm rounded overflow-hidden  ">
          <Image
            alt="Card background"
            className="object-cover rounded-md py-2 bg-fuchsia-950"
            src="/shoes-1.webp"
            width={270}
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-evenly">
          <h2 className="text-md font-semibold">Nike Adapt BB 2.0</h2>

          <h4 className="font-bold text-base">
            $279.97
            <span className="line-through text-xs text-gray-400">$350</span>
            <span className="text-fuchsia-700">20% off</span>
          </h4>
        </CardBody>
        <CardFooter>
          <div className="flex items-center gap-2">
            <Button
              className="rounded-md bg-fuchsia-600 font-semibold"
              variant="solid"
            >
              Buy now
            </Button>
            <Button
              className="rounded-md font-semibold"
              variant="bordered"
              color="secondary"
              startContent={<ShoppingCartIcon size={22} strokeWidth={1.5} />}
            >
              Add to bag
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

// DO NOT TOUCH

{
  /* <div className="flex gap-4  justify-between items-center text-center mb-2">
            <RadioGroup orientation="horizontal"  defaultValue="london">
              <Radio
                value="buenos-aires"
                classNames={{
                  label: "radio-label p-2 rounded",
                  wrapper: "hidden",
                }}
              >
                XS
              </Radio>
              <Radio
                value="sydney"
                classNames={{
                  label: "radio-label  p-2 rounded-full",
                  wrapper: "hidden",
                }}
              >
                SM
              </Radio>
              <Radio
                value="london"
                classNames={{
                  label: "radio-label  p-2 rounded-full",
                  wrapper: "hidden",
                }}
              >
                M
              </Radio>
              <Radio
                value="tokyo"
                classNames={{
                  label: "radio-label  p-2 rounded-full",
                  wrapper: "hidden",
                }}
              >
                L
              </Radio>
            </RadioGroup>
          </div> */
}
