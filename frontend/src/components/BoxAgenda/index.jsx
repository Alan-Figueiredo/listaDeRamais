import styles from "./BoxAgenda.module.css";
import Table from "../Table";

function BoxAgenda({ name }) {
  
  return (
    <div className={styles.containerBox}>
      <div className={styles.titleSetor}>{name}</div>
      <>
        <Table setor={name}/>
      </>
    </div>
  );
}

export default BoxAgenda;
