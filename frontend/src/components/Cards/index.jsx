import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
import images from "../../assets/images";

function Cards({ nome }) {
  // Verifica se o nome da imagem existe no objeto de imagens
  const imageSrc = images[nome];

  if (!imageSrc) {
    return <div>Imagem não encontrada</div>; 
  }

  return (
    <div className={styles.cards}>
      <Link to="/listCity">
        <img src={imageSrc} alt={nome} />
      </Link>
    </div>
  );
}

export default Cards;
