import React from 'react';
import { useAppContext } from '../AppContext';

export const FinalScore = () => {
  const { correctCount } = useAppContext();

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>4</p>
      </div>
    </div>
  );
};
