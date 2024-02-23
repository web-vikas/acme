import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "./icons";
// import { Select, SelectItem, SelectSection } from "@nextui-org/select";

export const Navbar = () => {
  return (
     <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="sm:flex sm:justify-between" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit sm:max-w-none">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img src="logo.svg" alt="" className="w-64" />
          </NextLink>
          <div className="hidden sm:flex items-center gap-3 border rounded-lg w-96 ml-8 text-2xl h-10 bg-sky-50">
            <SearchIcon className="ml-2 w-5" />
            <input
              type="text"
              placeholder="Search for Product, Brands and More"
              className="w-full text-lg outline-none bg-sky-50"
            />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex sm:items-center sm:gap-1" justify="end">
        <div className="flex sm:border-1 sm:w-28 sm:h-10 sm:rounded-lg">
          <img src="profile.svg" alt="" className="w-6 ml-2" />
          <select name="Vicky" id="" className="border-none outline-none">
            <option value="">Profile</option>
            <option value="">Profile</option>
            <option value="">Profile</option>
          </select>
        </div>
        <div className="flex gap-1 ml-2 cursor-pointer">
          <img src="cart.svg" alt="" />
          <NextLink href="#">Cart</NextLink>
        </div>
        <div className="flex gap-1 ml-2 cursor-pointer">
          <img src="Store.svg" alt="" />
          <NextLink href="#">Become a Seller</NextLink>
        </div>
        {/* <ThemeSwitch /> */}
        <div className="flex ml-2 cursor-pointer">
          <img src="verticalDots.svg" alt="" />
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};
