import styles from "./Cards.module.css";

function Cards({ nome }) {
  return (
    <div className={styles.cards}>
      <img
        src={require(`../../assets/logo${nome}.png`)}
      />
    </div>
  );
}

export default Cards;
