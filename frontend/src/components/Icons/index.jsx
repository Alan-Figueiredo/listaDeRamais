import styles from "./Icons.module.css";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Icons() {
  return (
    <>
      <LuClipboardEdit className={styles.iconEdit} />
      <RiDeleteBin6Fill className={styles.iconClear} />
    </>
  );
}

export default Icons;
