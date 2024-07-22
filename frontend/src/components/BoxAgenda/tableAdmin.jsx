import styles from "./BoxAgenda.module.css";

function TableAdmin({ramal,nome,depart}) {
  return (
    <table className={styles.containerTableAdmin}>
      <thead>
        <tr>
          <th>{ramal}</th>
          <th>{nome}</th>
          <th>{depart}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1asassaasas</td>
          <td>Domenic</td>
          <td>asasasasaassasaasasasaassa</td>
          <button>Editar</button>
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

export default TableAdmin;
