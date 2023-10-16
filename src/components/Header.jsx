import React, { useState } from "react";
import styles from "../style/Header.module.scss";
import avatar1 from '../images/avatar-1.png'
import avatar2 from '../images/avatar-2.png'
import avatar3 from '../images/avatar-3.png'
import avatar4 from '../images/avatar-4.png'
import ModalMember from "./ModalMember";



export default function Header() {
  var items = [
    {
      id: 1,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 18 19" fill="none">
      <path d="M16 0.5H1.99C0.88 0.5 0.00999999 1.39 0.00999999 2.5L0 16.5C0 17.6 0.88 18.5 1.99 18.5H16C17.1 18.5 18 17.6 18 16.5V2.5C18 1.39 17.1 0.5 16 0.5ZM16 12.5H12C12 14.16 10.65 15.5 9 15.5C7.35 15.5 6 14.16 6 12.5H1.99V2.5H16V12.5Z" fill="white"/>
      </svg>,
      text: "Backlog",
    },
    {
      id: 2,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19 19" fill="none">
      <path d="M0.333984 10.5H8.33398V0.5H0.333984V10.5ZM0.333984 18.5H8.33398V12.5H0.333984V18.5ZM10.334 18.5H18.334V8.5H10.334V18.5ZM10.334 0.5V6.5H18.334V0.5H10.334Z" fill="white"/>
      </svg>,
      text: "Board",
    },
    { 
      id: 3, 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 23 18" fill="none">
      <path d="M12.666 8.5H19.666V10H12.666V8.5ZM12.666 6H19.666V7.5H12.666V6ZM12.666 11H19.666V12.5H12.666V11ZM20.666 0.5H2.66602C1.56602 0.5 0.666016 1.4 0.666016 2.5V15.5C0.666016 16.6 1.56602 17.5 2.66602 17.5H20.666C21.766 17.5 22.666 16.6 22.666 15.5V2.5C22.666 1.4 21.766 0.5 20.666 0.5ZM20.666 15.5H11.666V2.5H20.666V15.5Z" fill="white"/>
      </svg>, 
      text: "Feed" 
    },
    {
      id: 4,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 16 20" fill="none">
      <path d="M14 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM2 2H7V10L4.5 8.5L2 10V2Z" fill="white"/>
      </svg>,
      text: "Reports",
    },
  ];
  const [showModalMember, setShowModalMember] = useState(false)
  const newMember =()=>{
    setShowModalMember(true)
  }
  return (
    <div className={styles.header}>
      <div className={styles.head}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <div>{item.svg}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.subbar}>
        <div className={styles.subbarCon}>
        <div className={styles.subbarLeft}>
          <h4>Product Design Team</h4>
          <button>Sprint 9</button>
        </div>
        <div className={styles.subbarRight}>
        <div className={styles.avatarBox}>
          <img src={avatar1} style={{ zIndex: 4 }}/>
          <img src={avatar2} style={{ zIndex: 3 }}/>
          <img src={avatar3} style={{ zIndex: 2 }}/>
          <img src={avatar4} style={{ zIndex: 1 }}/>
          <div className={styles.add} style={{ zIndex: 0 }}>+4</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.newMember} onClick={newMember}>+ New Member</div>
        </div>
        </div>
      {showModalMember?<ModalMember setShowModalMember={setShowModalMember}/>:null}
      </div>
    </div>
  );
}
