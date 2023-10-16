import React from "react";
import clock from "../images/clock.png";

export default function Item({styles, title, description, btnText, date, avatar}) {
  return (
    <div className={styles.item}>
      <div className={styles.itemTop}>
        <h4>{title}</h4>
        <p style={{ display: description == false ? "none" : "block" }}>
          {description != false ? description : ""}
        </p>
        <button>{btnText}</button>
      </div>
      <div className={styles.itemBottom}>
        <div className={styles.date}>
          <img src={clock} />
          <h4>{date}</h4>
        </div>
        <img className={styles.avatar} src={avatar}/>
      </div>
    </div>
  );
}
