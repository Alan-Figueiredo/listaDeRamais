import styles from "./Container.module.css";


function ContainerLogin({ children }) {
    return(
        <div className={styles.containerLogin}>
            {children}
        </div>
    )
}
export default ContainerLogin;