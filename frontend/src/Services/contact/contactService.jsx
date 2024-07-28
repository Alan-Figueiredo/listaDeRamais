import { api } from "../../Config/api/apiConfig";

const findAll = async () => {
  try {
    const response = await api.get("/contact");
    return response;
  } catch (e) {
    throw e;
  }

};


export { findAll };
