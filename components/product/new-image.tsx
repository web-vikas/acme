"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export const AddImages = () => {
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
                <ModalHeader className="flex flex-col gap-1">
                  Images
                </ModalHeader>
                <ModalBody className="grid md:grid-cols-2 gap-3">
                  <Input
                    type="email"
                    label="Front"
                    name="email"
                    isRequired
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="email"
                    label="Left"
                    name="email"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="email"
                    label="Right"
                    name="email"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="email"
                    label="Additional"
                    name="email"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
                    className="p-2"
                  />
                  <Input
                    type="email"
                    label="Additional"
                    name="Additional"
                    classNames={{
                      inputWrapper: "rounded-md border",
                      label: "font-semibold text-md",
                    }}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Image URL"
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
