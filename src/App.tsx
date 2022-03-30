import React, { useEffect, useState } from 'react';
import { Context } from './context';

import './App.css';
import BattleField from './components/BattleField/BattleField';
import GameInfo from './components/GameInfo/GameInfo';
import Header from './components/Header/Header';

function App() {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [gameState, setGameState] = useState<any>({});

  const startGame = (isStarted: any) => {
    return setIsStarted(!isStarted);
  }

  const getGameState = async () => {
    const layout = await fetch('http://localhost:3000/layout')
      .then((res) => res.json())
      .then((data) => data);

    const shipTypes = await fetch('http://localhost:3000/shipTypes')
      .then((res) => res.json())
      .then((data) => data);

    return setGameState({
      shipTypes,
      layout
    })
  }

  useEffect(() => {
    if (isStarted) {
      getGameState();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStarted])

  return (
    <Context.Provider value={{
      startGame,
      isStarted,
      gameState
    }}>
      <div className="App">
        <Header />
        <div className="game-content">
          <BattleField />
          <GameInfo />
        </div>
      </div>
    </Context.Provider>

  );
}

export default App;
