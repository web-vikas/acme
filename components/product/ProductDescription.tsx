"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import TShirtDescription from "./t-shirt";

const ProductDescription = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between pb-0">
        <h1 className="text-lg font-bold">Product Description</h1>
        <AddProductDescription />
      </CardHeader>
      <CardBody>
        <Table
          shadow="none"
          hideHeader
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
              <TableCell>Type</TableCell>
              <TableCell>V Neck</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Style</TableCell>
              <TableCell>COAT</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Size</TableCell>
              <TableCell>M</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Fabric</TableCell>
              <TableCell>Cotton</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Occasion</TableCell>
              <TableCell>Casual</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProductDescription;

export const AddProductDescription = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary" variant="light" >
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
                <ModalBody>
                  <TShirtDescription />
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
