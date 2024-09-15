import styles from "./BoxAgenda.module.css";
import Table from "../Table";

function BoxAgenda({ name, NameSelectedcity, NameImagehome }) {  
  return (
    <div className={styles.containerBox}>
      <div className={styles.titleSetor}>{name}</div>
      <>
        <Table setor={name} NameSelectedcity={NameSelectedcity} NameImagehome={NameImagehome} /> 
      </>
    </div>
  );
}

export default BoxAgenda;
