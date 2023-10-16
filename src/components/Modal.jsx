import React, { useState } from "react";
import styles from "../style/Modal.module.scss";
import down from "../images/down.png";

export default function Modal({ setShowModal }) {
  const [itemNameValue, setItemNameValue] = useState("");
  const [ItemDesValue, setItemDesValue] = useState("");
  const [ItemDateValue, setItemDateValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Assigne');
  const [id, setId] = useState(3)

  

  const cancelItem = () => {
    setShowModal(false);
  };
  function ItemName(e) {
    setItemNameValue(e.target.value);
  }
  function ItemDes(e) {
    setItemDesValue(e.target.value);
  }
  function ItemDate(e) {
    setItemDateValue(e.target.value);
  }
  function selected(e){
    console.log(e.target.value)
  }
    const options =["Viverra Diam","Maecenas Lacus","Eget Integer","Nullam Velit"]
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
      const save=()=>{
      //   setItemObj({
      //       id: id + 1, 
      //       title: itemNameValue,
      //       description: ItemDesValue,
      //       btnText: selectedOption,
      //       date: ItemDateValue,
      //       avatarSrc: "../images/avatar-3.png",
      //     });
      //   console.log(itemObj)
      }
    return (
    <div className={styles.modalBg} onClick={cancelItem}>
      <div
        className={styles.modal} onClick={(e) => {e.stopPropagation();}}>
        <h3>New Item</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Name" onChange={ItemName} />
          <textarea placeholder="Description" onChange={ItemDes}></textarea>
          <input type="date" placeholder="Date" onChange={ItemDate} />
          <div className={styles.dropdown}>
            <div className={styles.select} onClick={toggleDropdown}>
              <p>{selectedOption}</p>
              <img src={down} />
            </div>
            {isOpen && (
                <ul className={styles.content}>
                {options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                    </li>
                ))}
                </ul>
            )}
          </div>
          <div className={styles.btnBox}>
            <button onClick={cancelItem}>Cancel</button>
            <button className={styles.save} onClick={save}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
