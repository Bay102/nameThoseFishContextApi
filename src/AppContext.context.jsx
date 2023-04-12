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

  const [userEntry, setUserEntry] = useState('');
  const [fish, setFish] = useState(initialFish);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [correctFish, setCorrectFish] = useState(fish.length ? fish[0]?.name : null);

  const matchFish = () => {
    if (correctFish === userEntry) {
      const filter = fish.filter((fish) => fish.name !== userEntry);
      setFish(filter);
      setCorrect(correct + 1);
      setCorrectFish(filter.length ? filter[0].name : null);
      setUserEntry('');
    } else {
      const filter = fish.filter((fish) => fish.name !== correctFish);
      setFish(filter);
      setIncorrectCount(incorrectCount + 1);
      setCorrectFish(filter.length ? filter[0].name : null);
      setUserEntry('');
    }
  };

  return (
    <AppContext.Provider
      value={{
        userEntry,
        fish,
        incorrectCount,
        correct,
        initialFish,
        setUserEntry,
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
    userEntry: context.userEntry,
    setUserEntry: context.setUserEntry,
    fish: context.fish,
    incorrectCount: context.incorrectCount,
    correct: context.correct,
    setFish: context.setFish,
    matchFish: context.matchFish,
    initialFish: context.initialFish,
  };
};
