import styles from "./NameCity.module.css";

function NameCity({ name }) {
  return (
    <div className={styles.containerList}>
      <h3>{name}</h3>
    </div>
  );
}

export default NameCity;
