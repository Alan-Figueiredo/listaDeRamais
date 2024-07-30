import { api } from "../../Config/api/apiConfig";

const findAll = async () => {
  try {
    const response = await api.get("/contact");
    return response;
  } catch (e) {
    throw e;
  }
};

const createContact = async (data) => {
  try {
    const response = await api.post("/contact/create", data);
    return response;
  } catch (e) {
    throw e;
  }
};

const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contact/${id}`);
    return response;
  } catch (e) {
    throw e;
  }
};

export { findAll, createContact, deleteContact };
