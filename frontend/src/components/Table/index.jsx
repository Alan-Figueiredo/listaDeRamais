import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import { findContactSector } from "../../Services/contact/contactService";

function Table({ setor }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const findNameSector = async () => {
      const response = await findContactSector(setor);
      const dataSector = response.data.map((i) => ({
        ramal: i.number,
        nome: i.nameContact,
        setor: i.idSector.nameSector,
        cidade: i.idCity.nameCity,
      }));
      setData(dataSector);
    };
    findNameSector();
  }, [setor]);
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          <th>Ramal</th>
          <th>Name</th>
          <th>Setor</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.ramal}</td>
            <td>{item.nome}</td>
            <td>{item.setor}</td>
            <td>{item.cidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
