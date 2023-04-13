import React, { createContext, useContext, useState } from 'react';
import { Images } from './assets/images';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const initialFish = [
    { name: 'trout', url: Images.trout },
    { name: 'salmon', url: Images.salmon },
    { name: 'tuna', url: Images.tuna },
    { name: 'shark', url: Images.shark },
  ];

  const [fish, setFish] = useState(initialFish);
  const [inCorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const correctFish = fish[0];

  const matchFish = (fishGuess) => {
    const filteredFish = fish.filter((fish) => fish.name !== correctFish.name);
    if (correctFish.name === fishGuess) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(inCorrectCount + 1);
    }
    setFish(filteredFish);
  };

  return (
    <AppContext.Provider
      value={{
        fish,
        inCorrectCount,
        correctCount,
        initialFish,
        setFish,
        matchFish,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    fish: context.fish,
    inCorrectCount: context.inCorrectCount,
    correctCount: context.correctCount,
    setFish: context.setFish,
    matchFish: context.matchFish,
    initialFish: context.initialFish,
  };
};
