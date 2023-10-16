import React, { useEffect, useState } from 'react'
import styles from '../style/Content.module.scss'
import search from '../images/search.png'
import Items from '../components/Items'
import data from '../../db.json'
import axios from 'axios'
import avatar from '../images/avatar-3.png'


export default function Content({setShowModal}) {

  const newItem = () => {
    setShowModal(true);
  }

  useEffect(()=>{
    // axios.get("http://localhost:3000/Todo")
    
  },[])

  const headerArr = ["ToDo","In Progress","In Review","Done"]
  
  return (
    <div className={styles.content}>
      <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.inputBox}>
          <img src={search}/>
          <input type="text" placeholder='Search Items'/>
        </div>
       <button onClick={newItem}>New Item</button>
      </div>
      <div className={styles.main}>
       {
        Object.keys(data).map((key,i)=>(
          <Items key={key} header={headerArr[i]} styles={styles} items={data[key]} />
        ))
       }
          </div>
      </div>
    </div>
  )
}
