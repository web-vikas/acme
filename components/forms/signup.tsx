"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  return (
    <div className="">
      <div>
        <Input
          type="email"
          label="Email"
          isRequired
          classNames={{
            inputWrapper: "rounded-md border",
            label: "font-semibold text-md",
          }}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your email"
          className="p-2"
        />
      </div>
      {step == 2 && (
        <div>
          <Input
            type="text"
            label="OTP"
            isRequired
            classNames={{
              inputWrapper: "rounded-md border",
              label: "font-semibold text-md",
            }}
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your otp"
            className="p-2"
          />
        </div>
      )}
      {isEmailVerified && (
        <>
          <div>
            <Input
              type="text"
              label="Name"
              isRequired
              classNames={{
                inputWrapper: "rounded-md border",
                label: "font-semibold text-md",
              }}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your name"
              className="p-2"
            />
          </div>
          <div>
            <Input
              type="Number"
              label="Phone"
              isRequired
              classNames={{
                inputWrapper: "rounded-md border",
                label: "font-semibold text-md",
              }}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Phone"
              className="p-2"
            />
          </div>
          <div>
            <Input
              type="password"
              label="Password"
              isRequired
              classNames={{
                inputWrapper: "rounded-md border",
                label: "font-semibold text-md",
              }}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your Password"
              className="p-2"
            />
          </div>
        </>
      )}
      <div className="mt-3">
        <Button variant="solid" color="secondary">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
