import { Link } from "react-router-dom";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.inputLogin}>
        <img src={require("../../assets/iconeLogin.png")} className={styles.imgLogin}/>
        <input type="text" placeholder="username"></input>
        <p></p>
        <input type="text" placeholder="Password"></input>
        <p></p>
        <Link to="/pageAdmin">
        <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
