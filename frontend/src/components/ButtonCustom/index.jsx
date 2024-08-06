import styles from "./ButtonCustom.module.css";

function ButtonCustom({ nome, event }) {
  return (
    <>
      <button onClick={event} className={styles.buttonCustom}>
        {nome}
      </button>
    </>
  );
}

export default ButtonCustom;
