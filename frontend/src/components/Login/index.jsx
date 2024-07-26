import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import {login} from "../Services/api"

function Login() {
  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleUser = (event) => setUser(event.target.value);
  const handlePasswd = (event) => setPasswd(event.target.value);

  function loginUser() {
    
    const data = {
      username: user,
      password: passwd,
    };

    login(data);
    console.log(data);
  }
  return (
    <div className={styles.containerLogin}>
      <div className={styles.divLogin}>
        <img
          src={require("../../assets/iconeLogin.png")}
          alt="login"
          className={styles.imgLogin}
        />
        <input
          type="text"
          placeholder="username"
          className={styles.inputLogin}
          onChange={handleUser}
        ></input>
        <p></p>
        <input
          type="text"
          placeholder="Password"
          className={styles.inputLogin}
          onChange={handlePasswd}
        ></input>
        <p></p>
        <Link to="">
          <button onClick={loginUser} className={styles.buttonLogin}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
