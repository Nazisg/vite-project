import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from 'axios'

export default function Items({styles, header,name}) {

  const [items,setItems] = useState(null)


useEffect(()=>{
  axios.get(`http://localhost:3000/${name}`)
  .then(res=>setItems(res.data))
  .catch(err=>console.log(err))
},[])


  return (
    <div className={styles.todo}>
      <div className={styles.head}>
        <h4>{header}</h4>
        <div className={styles.count}>{items && items.length}</div>
      </div>
      <div className={styles.items}>
        {
           items && items.map((item)=>(
            <Item key={item.id} title={item.title} description={item.description} 
            btnText={item.btnText} date={item.date} avatar={item.avatarSrc} styles={styles} />
          ))
        }
        </div>
    </div>
  );
}
