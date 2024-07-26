import { api } from "../../Config/api/apiConfig";


const login = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (e) {
    throw e;
  }
};

export { login };
