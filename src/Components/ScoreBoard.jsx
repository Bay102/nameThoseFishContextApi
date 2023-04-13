import { useAppContext } from '../AppContext';
import './styles/score-board.css';
import React from 'react';

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { fish, correctCount, inCorrectCount } = useAppContext();

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {inCorrectCount}</div>
      <div id="choices-left">
        {fish.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
