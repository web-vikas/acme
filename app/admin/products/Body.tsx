import { ExportIcon } from "@/components/icons/accounts/export-icon";
import NTable from "@/components/table";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";

const Body = ({ _this }: any) => {
  const columns = [
    { name: "Image", uid: "name" },
    { name: "Name", uid: "email" },
    { name: "Price", uid: "role" },
    { name: "Status", uid: "status" },
    { name: "Created At", uid: "createdAt" },
    { name: "ACTIONS", uid: "actions" },
  ];
  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <h3 className="text-xl font-semibold">All Products</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search products"
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Link underline="hover" href="products/new-product">
            New Product
          </Link>
          <Button color="primary" startContent={<ExportIcon />}>
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full">
        <NTable columns={columns} tableData={_this.tableData} />
      </div>
    </div>
  );
};

export default Body;
