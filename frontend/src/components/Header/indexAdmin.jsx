import styles from "./Header.module.css";
import LogoItadil from "../../assets/grupoItadil.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={LogoItadil} alt="Grupo itadil" className={styles.logo} />
      </Link>
    </header>
  );
}

export default Header;