import React from "react";
import Score from "../components/Score/score";
import Versus from "../components/Versus/versus";

import "./style.css";

export default function gameA() {
  return (
    <>
      <div className="container-game">
        <Score mode={["Rock", "Paper", "Scissors"]} />
        <Versus />
      </div>
    </>
  );
}
