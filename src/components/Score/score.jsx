import React from "react";
import "./score.css";
import "../../style-text.css";

export default function score({ mode, score }) {
  return (
    <>
      <div className="score-pad">
        <div className="title">
          {mode.map((data) => (
            <p key={data} id="sub">
              {data}
            </p>
          ))}
        </div>
        <div className="score">
          <h3>score</h3>
          <h1 className="point">{score}</h1>
        </div>
      </div>
    </>
  );
}
