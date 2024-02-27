import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Code } from "lucide-react";

import { AddImages } from "./new-image";
// import Image from "next/image";

const Images = () => {
  return (
    <Card className="w-full px-2">
      <CardHeader className="flex justify-between">
        <h1>Images</h1>
        <AddImages />
      </CardHeader>
      <CardBody>
        <div>
          <Image
            src="https://placehold.co/600x400/png"
            alt="front"
            className="w-full"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <Image
            src="https://placehold.co/40x40/png"
            alt="front"
            className="w-full rounded-md"
          />
          <Image
            src="https://placehold.co/40x40/png"
            alt="front"
            className="w-full rounded-md"
          />
          <Image
            src="https://placehold.co/40x40/png"
            alt="front"
            className="w-full rounded-md"
          />
          <Image
            src="https://placehold.co/40x40/png"
            alt="front"
            className="w-full rounded-md"
          />
          <Image
            src="https://placehold.co/40x40/png"
            alt="front"
            className="w-full rounded-md"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Images;
