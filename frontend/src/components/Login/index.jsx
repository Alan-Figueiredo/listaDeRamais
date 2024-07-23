import { Link } from "react-router-dom";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.inputLogin}>
        <img src={require("../../assets/iconeLogin.png")} alt="login" className={styles.imgLogin}/>
        <input type="text" placeholder="username" className={styles.inputLogin}></input>
        <p></p>
        <input type="text" placeholder="Password" className={styles.inputLogin}></input>
        <p></p>
        <Link to="/pageAdmin">
        <button className={styles.buttonLogin}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
