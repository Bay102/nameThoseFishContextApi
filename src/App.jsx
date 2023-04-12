import React from 'react';
import './App.css';

import './Components/styles/final-score.css';
import { AppProvider } from './AppContext.context';
import { Game } from './Components/Game';

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
