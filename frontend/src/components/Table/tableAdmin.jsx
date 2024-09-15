import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";
import Icons from "../Icons";
import styles from "./Table.module.css";
import { findAll } from "../../Services/contact/contactService";

function TableAdmin() {
  const [data, setData] = useState([]);
  
  function capitalize(string) {
    const exceptions = ['de', 'da', 'do', 'dos', 'das']; // Palavras que não devem ser capitalizadas
    return string
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        // Capitaliza a palavra se não for uma exceção ou se for a primeira palavra
        if (exceptions.includes(word) && index !== 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  useEffect(() => {
    const findAllContacts = async () => {
      try {
        const response = await findAll();
        const dataFull = response.data.map((i) => ({
          id: i.idContact,
          ramal: i.number,
          nome: i.nameContact,
          empresa: i.idCompany?.nameCompany || "",
          setor: i.idSector?.nameSector || "",
          city: i.idCity?.nameCity || "",
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
            <td>{capitalize(item.nome)}</td>
            <td>{capitalize(item.empresa)}</td>
            <td>{capitalize(item.setor)}</td>
            <td>{capitalize(item.city)}</td>
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
