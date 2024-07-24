import styles from "./ButtonCustom.module.css"

function ButtonCustom({nome}) {
    
    return(
        <>
        <button className={styles.buttonCustom}>{nome}</button>
        </>
    )
}

export default ButtonCustom;