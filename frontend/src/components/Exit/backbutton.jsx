import { RiArrowTurnBackLine } from "react-icons/ri";
import styles from "./Exit.module.css";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <>
      <div className={styles.containerExit}>
        <Link to="/pageAdmin">
          <button className={styles.buttonName}>
            BACK
            <RiArrowTurnBackLine className={styles.buttonIcon} />
          </button>
        </Link>
      </div>
    </>
  );
}

export default BackButton;
