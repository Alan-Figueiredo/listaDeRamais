import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

function Cards({ nome }) {

  
  return (
    <div className={styles.cards}>
      <Link to="/listCity">
        <img src={require(`../../assets/logo${nome}.png`)} alt={nome} />
      </Link>
    </div>
  );
}

export default Cards;
