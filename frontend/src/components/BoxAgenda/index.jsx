import styles from "./BoxAgenda.module.css";
import Table from "./table";

function BoxAgenda({ setor }) {
  return (
    <div className={styles.containerBox}>
      <div className={styles.titleSetor}>{setor}</div>
      <>
        <Table nome="nome" depart="departamento" ramal="ramal" />
      </>
    </div>
  );
}

export default BoxAgenda;
