import Icons from "../Icons";
import styles from "./Table.module.css";

function TableAdmin({ data }) {
  return (
    <table className={styles.containerTableAdmin}>
      <thead>
      <tr>
          <th colSpan="4">
            <div className={styles.buttonNewRamalContainer}>
              <span>Cadastre um novo ramal</span>
              <button className={styles.buttonNewRamal}>Novo Ramal</button>
            </div>
          </th>
        </tr>
        <tr>
          <th>Ramal</th>
          <th>Nome</th>
          <th>Empresa</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.ramal}</td>
            <td>{item.nome}</td>
            <td>{item.empresa}</td>
            <td className={styles.iconCell}>
              <span className={styles.name}>{item.depart}</span>
              <span className={styles.icons}>
                <Icons />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableAdmin;
