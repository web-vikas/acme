import React from "react";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center flex-col border border-slate-600 rounded-xl h-fit w-4/5">
        <h1 className="mt-5 text-3xl font-bold">Sign up</h1>
        <div className="sm:flex items-center justify-center text-center">
          <div className="m-5 w-72 md:flex items-center justify-center flex-col">
            <Input
              isRequired
              type="text"
              label="Name"
              className="max-w-xs p-2"
            />
            <Input
              isRequired
              type="email"
              label="Email"
              className="max-w-xs  p-2"
            />
            <Input
              isRequired
              type="password"
              label="Password"
              className="max-w-xs  p-2"
            />
            <Button color="default" className="font-bold">
              Sign up
            </Button>
            <p className="m-5">
              Already have an accounts
              <Link href={""}>
                {" "}
                <span className="text-blue-700 font-bold">Log in here</span>
              </Link>
            </p>
            <Button color="default" className="p-2 font-bold">
              Signup with google
            </Button>
          </div>
          <div className="max-md:hidden">
            <Image
              src="/sysadmin_03.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
