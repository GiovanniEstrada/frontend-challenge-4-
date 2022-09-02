import React, { useState } from "react";
import "./style.css";

//Components
import Score from "../components/Score/score";
import Buttons from "../components/Buttons/buttons";

export default function ModeA() {
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="container-modeA">
        <Score mode={["Rock", "Paper", "Scissors"]} score={score} />
        <Buttons mode={1} choice={choice} />
      </div>
    </>
  );
}
