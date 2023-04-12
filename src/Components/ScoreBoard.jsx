import { useAppContext } from "../AppContext.context";
import "./styles/score-board.css";
import React from "react";


// ! do not add props to scoreboard
export const ScoreBoard = () => {

  const {fish, correct, incorrectCount } = useAppContext();

  return (
    <div id="score-board">
    <div>Incorrect 🔻: {incorrectCount}</div>
    <div id="choices-left">
      {fish.map((answer) => (
        <div key={answer.name} className="choice">
          {answer.name}
        </div>
      ))}
    </div>
    <div>Correct ✅: {correct}</div>
  </div>
  );
};
