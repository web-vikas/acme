"use client";
import Config from "@/config";

import axios from "axios";
import { toast } from "sonner";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleResponse = (response: any) => {
  if (response?.status === 202) toast.error(response?.data?.error);
  else if (response?.status === 500) toast.error(response?.data?.message);
  else if (response?.status == 400) toast.error(response?.data?.error);
  else if (response?.status === 401) {
    Config.UNAUTHORIZED_EXCEPTION = true;
    toast.error("You are not authorized for the action.");
  } else if (response?.status === 200) {
    toast.success(response?.data?.message);
    return response?.data;
  } else toast.error("Something went wrong. Please contact server admin.");
  console.log(response);

  return false;
};
