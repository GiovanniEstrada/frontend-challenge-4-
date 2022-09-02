import React from "react";
import { Link } from "react-router-dom";
import "../../style-text.css";
import "./buttons.css";

//img
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import triangle from "../../images/bg-triangle.svg";

const Buttons = ({ setMyChoice }) => {
  const setChoise = (e) => {
    setMyChoice(e.target.dataset.id);
    console.log(e.target.dataset.id);
  };

  return (
    <>
      <div className="mode-1">
        <img src={triangle} className="lines" alt="" />
        <Link to="/game">
          <div
            data-id="paper"
            className="btn ca circle-blue"
            onClick={setChoise}
          >
            <div data-id="paper" className="cb circle-paper">
              <img data-id="paper" src={paper} alt="" />
            </div>
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            className="btn ca circle-yellow"
            onClick={setChoise}
          >
            <div data-id="scissors" className="cb circle-sci">
              <img data-id="scissors" src={scissors} alt="" />
            </div>
          </div>
        </Link>
        <Link to="/game">
          <div data-id="rock" className="btn ca circle-red" onClick={setChoise}>
            <div data-id="rock" className="cb circle-rock">
              <img data-id="rock" src={rock} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Buttons;
