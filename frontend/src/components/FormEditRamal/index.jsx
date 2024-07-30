import styles from "./FormEditRamal.module.css";
import ButtonCustom from "../ButtonCustom";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createContact } from "../../Services/contact/contactService";
import ApiException from "../../Config/api/apiException";

function FormEditRamal() {
  const [ramal, setRamal] = useState("");
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [error, setError] = useState(null);

  const handleRamal = (event) => setRamal(event.target.value);
  const handleNome = (event) => setNome(event.target.value);
  const handleSetor = (event) => setSetor(event.target.value);
  const handleEmpresa = (event) => setEmpresa(event.target.value);

  const createRamal = async () => {
    const data = {
      nome: nome,
      ramal: ramal,
      nomeCompany: empresa,
      nomeSector: setor,
    };

    try {
      await createContact(data);
    } catch (e) {
      setError("Erro ao criar contact " + e);
    }
  };

  return (
    <>
      <Banner nome="Editar ramal" />
      <div className={styles.containerEditRamal}>
        <form className={styles.formRamal}>
          <h4>Ramal</h4>
          <input type="text" onChange={handleRamal}></input>
          <h4>Nome</h4>
          <input type="text" onChange={handleNome}></input>
          <h4>Setor</h4>
          <input type="text" onChange={handleSetor}></input>
          <h4>Empresa</h4>
          <input type="text" onChange={handleEmpresa}></input>
          <Link to="/pageAdmin">
            <ButtonCustom event={createRamal} nome="Salvar" />
          </Link>
          {error && <ApiException message={error} />}
        </form>
      </div>
    </>
  );
}

export default FormEditRamal;
