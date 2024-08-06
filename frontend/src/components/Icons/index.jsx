import React, { useState } from "react";
import styles from "./Icons.module.css";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { deleteContact } from "../../Services/contact/contactService";
import { useNavigate } from "react-router-dom";


function Icons({ indexRow }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const clearContact = () => {
    setIsModalVisible(true);
  };

  const confirmClearContact = async () => {
    const response = await deleteContact(indexRow.id);
    console.log(response.status);
    setIsModalVisible(false);
  };

  const cancelClearContact = () => {
    setIsModalVisible(false);
  };

  const editContact = () => {
    console.log(indexRow)
    navigate(`/pageEdit/${indexRow.id}`, { state: { contact: indexRow } });
  };

  return (
    <>
      <button onClick={editContact}>
        <LuClipboardEdit className={styles.iconEdit} />
      </button>

      <button onClick={clearContact}>
        <RiDeleteBin6Fill className={styles.iconClear} />
      </button>
      {isModalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Tem certeza que deseja apagar o contato?</p>
            <button onClick={confirmClearContact}>Sim</button>
            <button onClick={cancelClearContact}>Não</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Icons;
