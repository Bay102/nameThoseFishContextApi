import React from 'react';
import './App.css';

import './Components/styles/final-score.css';

import { Game } from './Components/Game';
import { AppProvider } from './AppContext';

function App() {
  return (
    <div className="App">
      <header>
        <AppProvider>
          <Game />
        </AppProvider>
      </header>
    </div>
  );
}

export default App;
