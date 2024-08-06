import styles from "./Container.module.css"

function ContainerAgenda({children}) {
    
    return(
        <div className={styles.containerAgenda}>
            {children}
        </div>
    )
}

export default ContainerAgenda;