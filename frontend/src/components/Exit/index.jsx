import { ImExit } from "react-icons/im";
import styles from "./Exit.module.css";
import { Link } from "react-router-dom";

function Exit() {
  return (
    <>
      <div className={styles.containerExit}>
        <Link to="/admin">
          <button className={styles.buttonName}>
            EXIT
            <ImExit className={styles.buttonIcon} />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Exit;
