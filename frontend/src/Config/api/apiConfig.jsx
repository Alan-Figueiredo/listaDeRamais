import axios from "axios";


const api = axios.create({
  //baseURL: "http://192.168.4.211:8080/api", // adicionar o IP do servidor trabalho
  baseURL: "http://localhost:8080/api", // adicionar o IP do servidor casa
  withCredentials: true,
});

export {api};
