import styles from "./NameCity.module.css";

function NameCity({ name, event }) {
  return (
    <button className={styles.containerList} onClick={event}>
      <div>
        <h3>{name}</h3>
      </div>
    </button>
  );
}

export default NameCity;
