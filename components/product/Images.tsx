import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { AddImages } from "./new-image";
// import Image from "next/image";

const Images = () => {
  return (
    <Card className="w-full px-2">
      <CardHeader className="flex justify-between">
        <h1 className="text-lg font-bold">Images</h1>
        <AddImages />
      </CardHeader>
      <CardBody>
        <div>
          <Image
            src="https://placehold.co/800x400/png"
            alt="front"
            className="w-full"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <RadioGroup orientation="horizontal" defaultValue="london">
            <Radio
              value="buenos-aires"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="sydney"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="london"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
            <Radio
              value="tokyo"
              classNames={{
                label: "radio-label rounded-md",
                wrapper: "hidden",
              }}
            >
              <Image
                src="https://placehold.co/60x60/png"
                alt="front"
                className="w-full rounded-md"
              />
            </Radio>
          </RadioGroup>
        </div>
      </CardBody>
    </Card>
  );
};

export default Images;
