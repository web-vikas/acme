"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Code,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React from "react";

const ProductInfo = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between pb-0">
        <h1>Product Info</h1>
        <AddProductInfo />
      </CardHeader>
      <CardBody>
        <Table
          shadow="none"
          hideHeader
          aria-label="Example static collection table"
          classNames={{
            wrapper: "p-0",
          }}
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell> SKU ID</TableCell>
              <TableCell>123</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Listing Status</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Price - MRP</TableCell>
              <TableCell>111</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Price - Selling</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProductInfo;

export const AddProductInfo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary" variant="light" as="a">
          Edit
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          size="2xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Info</ModalHeader>
                <ModalBody className="grid md:grid-cols-2 gap-3">
                  <Input
                    type="text"
                    label="SKU ID"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                  />

                  <Select
                    label="Listing Status"
                    labelPlacement="outside"
                    isRequired
                    placeholder="Status"
                    classNames={{
                      label: "font-semibold text-md",
                    }}
                    className="p-2"
                  >
                    <SelectItem key="active">Active</SelectItem>
                    <SelectItem key="passive">Passive</SelectItem>
                  </Select>
                  <Input
                    type="text"
                    label="Price ( M.R.P)"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Price ( Selling )"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Stock"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                  />
                  <Input
                    type="text"
                    label="Delivery Charge"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                  />
                  <Select
                    label="Country"
                    labelPlacement="outside"
                    isRequired
                    classNames={{
                      label: "font-semibold text-md",
                    }}
                    placeholder="Country"
                    className="p-2"
                  >
                    <SelectItem key="active">India</SelectItem>
                    <SelectItem key="passive">Pakistan</SelectItem>
                  </Select>
                  <Input
                    type="text"
                    label="Manufacturing Details"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=" "
                    className="p-2"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    ADD
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
