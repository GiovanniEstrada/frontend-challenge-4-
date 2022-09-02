import React, { useState } from "react";
import Modal from "../Modal/modal";
import "./bottom.css";

export default function Bottom() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer-container">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/GiovanniEstrada">
            Giovanni Estrada
          </a>
          .
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal active={toggle} /> : null}
    </>
  );
}
