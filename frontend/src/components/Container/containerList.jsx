import styles from "./Container.module.css";


function ContainerList({ children }) {
    return(
        <div className={styles.containerList}>
            {children}
        </div>
    )
}
export default ContainerList;
