import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";
import Icons from "../Icons";
import styles from "./Table.module.css";
import { findAll } from "../../Services/contact/contactService";

function TableAdmin() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(6); // Número de contatos por página

  function capitalize(string) {
    const exceptions = ["de", "da", "do", "dos", "das"];
    return string
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        if (exceptions.includes(word) && index !== 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
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

  // Lógica de paginação
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = data.slice(indexOfFirstContact, indexOfLastContact);

  // Total de páginas
  const totalPages = Math.ceil(data.length / contactsPerPage);

  // Mudar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <table className={styles.containerTableAdmin}>
        <thead>
          <tr>
            <th>Ramal</th>
            <th>Nome</th>
            <th>Empresa</th>
            <th>Setor</th>
            <th>Cidade</th>
            <th>
              <Link to="/page-new-ramal">
                <ButtonCustom nome="Novo Ramal" />
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((item, i) => (
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

      
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            style={{padding : 7}}
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default TableAdmin;
