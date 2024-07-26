import axios from "axios";

function login(data) {
  axios
    .post("http://localhost:8080/api/auth/login",data)
    .then((response) => {
      const token = response.data;
      console.log(token)
    });
}

export { login };
