import { api } from "../../Config/api/apiConfig";

const findAll = async () => {
  try {
    const response = await api.get("/company");
    return response;
  } catch (e) {
    throw e;
  }
};

export {findAll}