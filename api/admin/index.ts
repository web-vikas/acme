import { API, handleResponse } from "@/helper/utils";

const Admin = {
  getAccounts: async () => {
    let response = null;
    try {
      response = await API.get("/admin/accounts");
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};
export default Admin;
