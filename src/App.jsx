import React, { useState } from "react";
import Score from "./components/Score/score";
import Buttons from "./components/Buttons/buttons";
import Versus from "./components/Versus/versus";
import Bottom from "./components/Bottom/bottom";
import { Routes, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Score mode={["Rock", "Paper", "Scissors"]} score={score} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Buttons setMyChoice={setMyChoice} />}
          ></Route>
          <Route
            path="/game"
            element={
              <Versus myChoice={myChoice} score={score} setScore={setScore} />
            }
          ></Route>
        </Routes>
      </div>
      <Bottom />
    </>
  );
}
