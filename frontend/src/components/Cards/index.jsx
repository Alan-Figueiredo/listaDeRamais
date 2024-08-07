import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";
import images from "../../assets/images";

function Cards({ nome }) {
  const navigate = useNavigate();
  // Verifica se o nome da imagem existe no objeto de imagens
  const imageSrc = images[nome];

  if (!imageSrc) {
    return <div>Imagem não encontrada</div>;
  }

  const nameImg = () => {
    navigate(`/listCity`, { state: { objNameCity: nome } });
  };
  return (
    <div className={styles.cards}>
      <img src={imageSrc} alt={nome} onClick={nameImg} />
    </div>
  );
}

export default Cards;
