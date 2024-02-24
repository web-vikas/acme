import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { LockIcon } from "lucide-react";
import Link from "next/link";

const LogInForm = () => {
  return (
    <div>
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

      <div>
        <Input
          type="text"
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

      <div className="mt-3">
        <Button variant="solid" color="secondary" className="rounded-md">
          <LockIcon size={18} strokeWidth={1.5} />
          Login
        </Button>
      </div>
    </div>
  );
};

export default LogInForm;
