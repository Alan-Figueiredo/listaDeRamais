import styles from "./Icons.module.css";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Icons() {
  return (
    <>
      <button>
        <LuClipboardEdit className={styles.iconEdit} />
      </button>
      <button>
        <RiDeleteBin6Fill className={styles.iconClear} />
      </button>
    </>
  );
}

export default Icons;
