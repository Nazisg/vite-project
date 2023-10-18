import React, { useEffect, useState } from "react";
import styles from "../style/Content.module.scss";
import search from "../images/search.png";
import Items from "../components/Items";

export default function Content({ setShowModal }) {
  const newItem = () => {
    setShowModal(true);
  };

  const arr = [
    { id: 1, name: "todo", header: "To Do" },
    { id: 2, name: "inprogress", header: "In Progress" },
    { id: 3, name: "inreview", header: "In Review" },
    { id: 4, name: "done", header: "Donne" },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.inputBox}>
            <img src={search} />
            <input type="text" placeholder="Search Items" />
          </div>
          <button onClick={newItem}>New Item</button>
        </div>
        <div className={styles.main}>
          {arr.map((e)=><Items name={e.name} header={e.header} styles={styles}  key={e.id}/>)}
        </div>
      </div>
    </div>
  );
}
