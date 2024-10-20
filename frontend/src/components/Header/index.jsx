import styles from "./Header.module.css";
import LogoEmpresa from "../../assets/logoEmpresa.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={LogoEmpresa} alt="Logo da empresa" className={styles.logo} />
      </Link>
      <nav>Precisa de ajuda? Contate-nos</nav>
    </header>
  );
}

export default Header;
