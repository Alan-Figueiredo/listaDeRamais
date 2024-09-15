import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import { findContactSector } from "../../Services/contact/contactService";

function Table({ setor, NameSelectedcity, NameImagehome }) {
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
    const findNameSector = async () => {
      try {
        const response = await findContactSector(setor);
        
        // Mapeia os dados recebidos da API
        const dataSector = response.data.map((i) => ({
          ramal: i.number,
          nome: i.nameContact,
          setor: i.idSector.nameSector,
          cidade: i.idCity.nameCity,
          empresa: i.idCompany.nameCompany, 
        }));

        const filteredData = dataSector.filter(
          (item) =>
            item.cidade.toLowerCase() === NameSelectedcity.toLowerCase() &&
            item.empresa.toLowerCase() === NameImagehome.toLowerCase()
        );

      
        setData(filteredData);
      } catch (error) {
        console.error("Erro ao buscar os contatos do setor:", error);
      }
    };

    findNameSector();
  }, [setor, NameSelectedcity, NameImagehome]);
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
            <td>{capitalize(item.nome)}</td>
            <td>{capitalize(item.setor)}</td>
            <td>{capitalize(item.cidade)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
