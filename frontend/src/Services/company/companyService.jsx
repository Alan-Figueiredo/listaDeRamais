import { api } from "../../Config/api/apiConfig";

const findAll = async () => {
  try {
    const response = await api.get("/company");
    return response;
  } catch (e) {
    throw e;
  }
};

const findNameCompany = async (nameCompany) => {
  try {
    const response = await api.get(`/company/name/${nameCompany}`);
    return response;
  } catch (e) {
    throw e;
  }
};
export { findAll, findNameCompany };
