import React from 'react';
import { useAppContext } from '../AppContext';
import { GameBoard } from './GameBoard';
import { ScoreBoard } from './ScoreBoard';
import { FinalScore } from './FinalScore';

export const Game = () => {
  const { fish } = useAppContext();

  return (
    <header>
      {fish.length ? (
        <div>
          <ScoreBoard />
          <GameBoard />
        </div>
      ) : (
        <FinalScore />
      )}
    </header>
  );
};
