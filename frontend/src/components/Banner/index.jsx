import styles from "./Banner.module.css";

function Banner({nome}) {
  return(
    <div className={styles.banner}>
    {nome}
    </div>
  )
}

export default Banner;
