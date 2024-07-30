import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080/api", // adicionar o IP do servidor 
  withCredentials: true,
});

export {api};
