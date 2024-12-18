import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import { login } from "../../Services/auth/authService";
import ApiException from "../../Config/api/apiException";
import iconeLogin from "../../assets/iconeLogin.png";

function Login() {
  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUser = (event) => setUser(event.target.value);
  const handlePasswd = (event) => setPasswd(event.target.value);

  const loginUser = async () => {
    const data = {
      username: user,
      password: passwd,
    };

    try {
      await login(data);
      setError(null);
      navigate("/page-admin");
    } catch (e) {
      setError("Login ou Senha incorretos");

      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.divLogin}>
        <img src={iconeLogin} alt="login" className={styles.imgLogin} />
        <input
          type="text"
          placeholder="username"
          className={styles.inputLogin}
          onChange={handleUser}
        />
        <p></p>
        <input
          type="password"
          placeholder="Password"
          className={styles.inputLogin}
          onChange={handlePasswd}
        />
        <p></p>
        <button onClick={loginUser} className={styles.buttonLogin}>
          Login
        </button>
        {error && <ApiException message={error} />}
      </div>
    </div>
  );
}

export default Login;
