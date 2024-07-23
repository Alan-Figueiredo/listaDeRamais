import Icons from "../Icons";
import styles from "./Table.module.css";

function TableAdmin({ data }) {
  return (
    <table className={styles.containerTableAdmin}>
      <thead>
        <tr>
          <th>Ramal</th>
          <th>Nome</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.ramal}</td>
            <td>{item.nome}</td>
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
