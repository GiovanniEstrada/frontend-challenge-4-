import React from "react";

//Components
import Score from "../components/Score/score";
import Buttons from "../components/Buttons/buttons";

function modeA() {
  return (
    <>
      <div className="container-modeB">
        <Score mode={["Rock", "Paper", "Scissors", "Lizard", "Spock"]} />
        <Buttons mode={2} />
      </div>
    </>
  );
}

export default modeA;
