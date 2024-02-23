"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

const SignUpForm = () => {
  const [step, setStep] = useState(2);
  const [isEmailVerified, setIsEmailVerified] = useState(true);

  return (
    <div>
      <div>
        <Input
          type="email"
          label="Email"
          classNames={{
            inputWrapper: "rounded-md border",
            label: "font-semibold text-md",
          }}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your email"
        />
      </div>
      {step == 2 && (
        <div>
          <Input type="text" variant="underlined" label="OTP" />
        </div>
      )}
      {isEmailVerified && (
        <>
          <div>
            <Input type="text" variant="underlined" label="Name" />
          </div>
          <div>
            <Input type="text" variant="underlined" label="Phone" />
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
