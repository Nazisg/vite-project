import React from "react";
import Item from "./Item";

export default function Items({styles, header,items}) {
  return (
    <div className={styles.todo}>
      <div className={styles.head}>
        <h4>{header}</h4>
        <div className={styles.count}>{items.length}</div>
      </div>
      <div className={styles.items}>
        {
          items.map((item)=>(
            <Item key={item.id} title={item.title} description={item.description} 
            btnText={item.btnText} date={item.date} avatar={item.avatarSrc} styles={styles} />
          ))
        }
        </div>
    </div>
  );
}
