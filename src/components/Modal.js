import React, { useState } from "react";
// import "../styles/modalStyle.scss";

function Modal({ closeModal }) {
  const [openModal, setOpenModal] = useState(false);
  closeModal = () => {
    setOpenModal(!openModal);
  };
  console.log(openModal);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>X</button>
        </div>
        <div className="title">
          <h1>Modal</h1>
        </div>
        <div className="body">
          <p>Modal body</p>
        </div>
        <div className="footer">
          <button onClick={() => {closeModal()}} id="cancelBtn">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
