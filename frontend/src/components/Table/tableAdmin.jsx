import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";
import Icons from "../Icons";
import styles from "./Table.module.css";
import { findAll } from "../../Services/contact/contactService";

function TableAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const findAllContacts = async () => {
      try {
        const response = await findAll();
        console.log(response.data)
        const dataFull = response.data.map((i) => ({
          id: i.idContact,
          ramal: i.number,
          nome: i.nameContact,
          empresa: i.idCompany.nameCompany,
          setor: i.idSector.nameSector,
          city : i.idCity.nameCity
        }));
        setData(dataFull);
      } catch (e) {
        throw e;
      }
    };
    findAllContacts();
  }, []);

  return (
    <table className={styles.containerTableAdmin}>
      <thead>
        <tr>
          <th>Ramal</th>
          <th>Nome</th>
          <th>Empresa</th>
          <th>Setor</th>
          <th>Cidade</th>
          <th>
            <Link to="/pageEditRamal">
              <ButtonCustom nome="Novo Ramal" />
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.ramal}</td>
            <td>{item.nome}</td>
            <td>{item.empresa}</td>
            <td>{item.setor}</td>
            <td>{item.city.replace(/_/g, ' ')}</td>
            <td>
              <Icons indexRow={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableAdmin;
