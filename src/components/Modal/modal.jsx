import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import ruleA from "../../images/image-rules.svg";
import exit from "../../images/icon-close.svg";

export default function Modal({ active }) {
  const modal = document.getElementById("modal");
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h1 className="rule">Rules</h1>
          <button onClick={active} className="button-exit">
            <img src={exit} alt="Close" srcSet="" className="exit-img" />
          </button>
        </div>
        <img src={ruleA} alt="Rules" srcSet="" className="rule-img" />
      </div>
    </div>,
    modal
  );
}
