import styles from "./Header.module.css";
import LogoItadil from '../../assets/grupoItadil.png'

function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoItadil} alt="Grupo itadil" className={styles.logo}/>
      <nav>
        <a href="#"> Ramais</a>
        <a href="#"> Contate-nos</a> 
      </nav>
    </header>
  );
}

export default Header;
