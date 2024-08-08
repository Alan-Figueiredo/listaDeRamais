import styles from "./BoxAgenda.module.css";
import Table from "../Table";

function BoxAgenda({ name }) {
  return (
    <div className={styles.containerBox}>
      <div className={styles.titleSetor}>{name}</div>
      <>
        <Table />
      </>
    </div>
  );
}

export default BoxAgenda;
