import axios from "axios";


const api = axios.create({
  baseURL: "http://192.168.4.211:8080/api", // adicionar o IP do servidor 
  withCredentials: true,
});

export {api};
