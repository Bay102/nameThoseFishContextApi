import './styles/game-board.css';
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';

export const GameBoard = () => {
  const [userEntry, setUserEntry] = useState('');
  const { fish, matchFish } = useAppContext();
  const nextFishToName = fish[0];

  const fishInputHandler = ({ target: { value } }) => {
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
            matchFish(userEntry);
            setUserEntry('');
          }
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userEntry}
          onChange={fishInputHandler}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
