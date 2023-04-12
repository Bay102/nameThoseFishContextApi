import './styles/game-board.css';
import React from 'react';
import { useAppContext } from '../AppContext.context';

// ! Do not add props to gameboard
export const GameBoard = () => {
  const { userEntry, setUserEntry, fish, matchFish } = useAppContext();

  const nextFishToName = fish[0];

  const fishInput = ({ target: { value } }) => {
    setUserEntry(value);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (userEntry) {
            matchFish();
          }
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userEntry}
          onChange={fishInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
