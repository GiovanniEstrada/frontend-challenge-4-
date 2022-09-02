import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./versus.css";

//img
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";

export default function Versus({ score, myChoice, setScore }) {
  const [bot, setBot] = useState("");
  const [count, setCount] = useState(3);
  const [win, setWin] = useState("");

  const select = () => {
    const options = ["rock", "paper", "scissors"];
    setBot(options[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    select();
  }, []);

  const Response = () => {
    if (myChoice === bot) {
      setWin("Draw");
    } else if (myChoice === "rock") {
      if (bot === "paper") {
        setWin("You Lose");
        setScore(score - 1);
      } else if (bot === "scissors") {
        setWin("You Win");
        setScore(score + 1);
      }
    } else if (myChoice === "paper") {
      if (bot === "rock") {
        setWin("You Win");
        setScore(score + 1);
      } else if (bot === "scissors") {
        setWin("You Lose");
        setScore(score - 1);
      }
    } else if (myChoice === "scissors") {
      if (bot === "rock") {
        setWin("You Lose");
        setScore(score - 1);
      } else if (bot === "paper") {
        setWin("You Win");
        setScore(score + 1);
      }
    }
  };

  useEffect(() => {
    const temp =
      count > 0
        ? setInterval(() => {
            setCount(count - 1);
          }, 1000)
        : Response();

    return () => {
      clearInterval(temp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, bot]);

  return (
    <div className="container-versus">
      <div className="game">
        <span className="text">You Picked</span>
        <div
          className={`circle-a choice-${myChoice} ${
            win === "You Win" ? `win` : win === "You Lose" ? `lose` : `draw`
          }`}
        >
          <div className={`circle-b ${myChoice}`}>
            {myChoice === "rock" ? (
              <img alt="" src={rock}></img>
            ) : myChoice === "paper" ? (
              <img alt="" src={paper}></img>
            ) : (
              <img alt="" src={scissors}></img>
            )}
          </div>
        </div>
      </div>
      {win.length !== 0 ? (
        <div className="replay">
          <h1 className="result">{win}</h1>
          <Link to="/" className="again">
            Play Again
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      <div className="game">
        <span className="text">The House Picked</span>
        {win.length !== 0 ? (
          <div
            className={`circle-a choice-${bot} ${
              win === "You Win" ? `lose` : win === "You Lose" ? `win` : `draw`
            }`}
          >
            <div className={`circle-b ${bot}`}>
              {bot === "rock" ? (
                <img
                  alt=""
                  src={rock}
                  className={win === "Lose" ? `win` : `lose`}
                ></img>
              ) : bot === "paper" ? (
                <img
                  alt=""
                  src={paper}
                  className={win === "Lose" ? `win` : `lose`}
                ></img>
              ) : (
                <img
                  alt=""
                  src={scissors}
                  className={win === "Lose" ? `win` : `lose`}
                ></img>
              )}
            </div>
          </div>
        ) : (
          <div className="base-bot"></div>
        )}
      </div>
    </div>
  );
}
