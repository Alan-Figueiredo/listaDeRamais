import styles from "./BoxAgenda.module.css";
import Table from "../Table";

function BoxAgenda({ setor }) {
  return (
    <div className={styles.containerBox}>
      <div className={styles.titleSetor}>{setor}</div>
      <>
        <Table />
      </>
    </div>
  );
}

export default BoxAgenda;
