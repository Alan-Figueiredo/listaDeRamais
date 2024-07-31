import styles from "./FormEditRamal.module.css";
import ButtonCustom from "../ButtonCustom";
import Banner from "../Banner";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiException from "../../Config/api/apiException";
import { updateContact } from "../../Services/contact/contactService";

function FormEditRamal() {
  const location = useLocation();
  const contact = location.state?.contact;
  const { id } = useParams();
  const intId = parseInt(id, 10);

  const [ramal, setRamal] = useState(contact ? contact.ramal : "");
  const [nome, setNome] = useState(contact ? contact.nome : "");
  const [setor, setSetor] = useState(contact ? contact.setor : "");
  const [empresa, setEmpresa] = useState(contact ? contact.empresa : "");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (contact) {
      setRamal(contact.ramal);
      setNome(contact.nome);
      setSetor(contact.setor);
      setEmpresa(contact.empresa);
    }
  }, [contact]);

  const handleRamal = (event) => setRamal(event.target.value);
  const handleNome = (event) => setNome(event.target.value);
  const handleSetor = (event) => setSetor(event.target.value);
  const handleEmpresa = (event) => setEmpresa(event.target.value);

  const updateRamal = async () => {
    const data = {
      nome: nome,
      ramal: ramal,
      nomeCompany: empresa,
      nomeSector: setor,
    };

    try {
      await updateContact(intId, data);
    } catch (e) {
      setError("Erro ao atualizar contato " + e);
    }
  };

  return (
    <>
      <Banner nome="Editar ramal" />
      <div className={styles.containerEditRamal}>
        <form className={styles.formRamal}>
          <h4>Ramal</h4>
          <input type="text" value={ramal} onChange={handleRamal}></input>
          <h4>Nome</h4>
          <input type="text" value={nome} onChange={handleNome}></input>
          <h4>Setor</h4>
          <input type="text" value={setor} onChange={handleSetor}></input>
          <h4>Empresa</h4>
          <input type="text" value={empresa} onChange={handleEmpresa}></input>
          <Link to="/pageAdmin">
            <ButtonCustom event={updateRamal} nome="Salvar" />
          </Link>

          {error && <ApiException message={error} />}
        </form>
      </div>
    </>
  );
}

export default FormEditRamal;
