import styles from "./Table.module.css";

function Table() {
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          <th>Ramal</th>
          <th>Name</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1asassaasas</td>
          <td>Domenic</td>
          <td>asasasasaassasaasasasaassa</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Domenic</td>
          <td>88,110</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Domenic</td>
          <td>88,110</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Domenic</td>
          <td>88,110</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Domenic</td>
          <td>88,110</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
