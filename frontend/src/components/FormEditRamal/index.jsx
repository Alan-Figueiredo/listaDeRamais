import styles from "./FormEditRamal.module.css";
import ButtonCustom from "../ButtonCustom";
import Banner from "../Banner";
import { Link } from "react-router-dom";

function FormEditRamal() {
  return (
    <>
      <Banner nome="Editar ramal" />
      <div className={styles.containerEditRamal}>
        <form className={styles.formRamal}>
          <h4>Ramal</h4>
          <input type="text"></input>
          <h4>Nome</h4>
          <input type="text"></input>
          <h4>Departamento</h4>
          <input type="text"></input>
          <h4>Empresa</h4>
          <input type="text"></input>
          <Link to="/pageAdmin"><ButtonCustom nome="Salvar" /></Link>
        </form>
      </div>
    </>
  );
}

export default FormEditRamal;
