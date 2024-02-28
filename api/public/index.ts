import { API, handleResponse } from "@/helper/utils";

const Public = {
  GetProducts: async () => {
    let response = null;
    try {
      response = await API.get("/products/get-products");
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};
export default Public;