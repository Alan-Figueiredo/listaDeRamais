import { api } from "../../Config/api/apiConfig";

const findAll = async () => {
  try {
    const response = await api.get("/contact");
    return response;
  } catch (e) {
    throw e;
  }
};

const findContactCity = async (nameCity) => {
  try {
    const response = await api.get(`/contact/contactcity/${nameCity}`);
    return response;
  } catch (e) {
    throw e;
  }
};

const findContactSector = async (nameSector) => {
  try {
    const response = await api.get(`/contact/contactsector/${nameSector}`);
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

const updateContact = async (id, data) => {
  try {
    const response = await api.patch(`/contact/${id}`, data);
    return response;
  } catch (e) {
    throw e;
  }
};

export {
  findAll,
  createContact,
  deleteContact,
  updateContact,
  findContactCity,
  findContactSector,
};
