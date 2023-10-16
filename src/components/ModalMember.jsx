import React from "react";
import styles from "../style/ModalMember.module.scss";

export default function ModalMember({setShowModalMember}) {
    const cancelMember =()=>{
        setShowModalMember(false)
    }
  return (
    <div className={styles.modalBg} onClick={cancelMember}>
        <div className={styles.modal} onClick={(e)=>{e.stopPropagation()}}>
      <form className={styles.form}>
        <h4>New Member</h4>
        <input type="text" placeholder="Name"/>
        <input type="file" />
        <div className={styles.btnBox}>
          <button onClick={cancelMember}>Cancel</button>
          <button className={styles.save}>Save</button>
        </div>
      </form>
    </div>
    </div>
  );
}
