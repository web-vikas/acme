import { Input, Select, SelectItem } from "@nextui-org/react";

const TShirtDescription = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Select
        label="Type"
        labelPlacement="outside"
        isRequired
        placeholder="Type"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="active">V Neck</SelectItem>
        <SelectItem key="passive">Circle</SelectItem>
      </Select>
      <Input
        type="text"
        label="Style"
        classNames={{
          inputWrapper: "rounded-md border",
          label: "font-semibold text-md",
        }}
        variant="bordered"
        labelPlacement="outside"
        placeholder="Style"
        className="p-2"
      />
      <Select
        label="Size"
        labelPlacement="outside"
        isRequired
        placeholder="Size"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="s">S</SelectItem>
        <SelectItem key="m">M</SelectItem>
        <SelectItem key="l">L</SelectItem>
        <SelectItem key="xl">XL</SelectItem>
      </Select>
      <Input
        type="number"
        label="Pack Of"
        classNames={{
          inputWrapper: "rounded-md border",
          label: "font-semibold text-md",
        }}
        variant="bordered"
        labelPlacement="outside"
        placeholder="Style"
        className="p-2"
      />
      <Select
        label="Pattern"
        labelPlacement="outside"
        isRequired
        placeholder="Pattern"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="s">Cartoon</SelectItem>
        <SelectItem key="m">Solid</SelectItem>
        <SelectItem key="l">Plain</SelectItem>
        <SelectItem key="xl">Typography</SelectItem>
      </Select>
      <Select
        label="Fabric"
        labelPlacement="outside"
        isRequired
        placeholder="Fabric"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="s">Cartoon</SelectItem>
        <SelectItem key="m">Solid</SelectItem>
      </Select>
      <Select
        label="Sleeve"
        labelPlacement="outside"
        isRequired
        placeholder="Sleeve"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="s">Cartoon</SelectItem>
        <SelectItem key="m">Solid</SelectItem>
      </Select>
      <Select
        label="Occasion"
        labelPlacement="outside"
        isRequired
        placeholder="Occasion"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="s">Cartoon</SelectItem>
        <SelectItem key="m">Solid</SelectItem>
      </Select>
      <Select
        label="Suitable For"
        labelPlacement="outside"
        isRequired
        placeholder="Suitable For"
        classNames={{
          label: "font-semibold text-md",
        }}
        className="p-2"
      >
        <SelectItem key="s">Men</SelectItem>
        <SelectItem key="m">Women</SelectItem>
      </Select>
    </div>
  );
};

export default TShirtDescription;
