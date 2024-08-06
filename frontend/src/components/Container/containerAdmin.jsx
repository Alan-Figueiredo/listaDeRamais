import styles from "./Container.module.css"

function ContainerAdmin({children}) {
    
    return(
        <div className={styles.containerAdmin}>
            {children}
        </div>
    )
}

export default ContainerAdmin;