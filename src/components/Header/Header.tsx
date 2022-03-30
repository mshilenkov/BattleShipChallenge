import React, { useContext } from 'react';
import { Context } from '../../context';

import './Header.css'

function Header() {
  const { isStarted, startGame } = useContext<any>(Context);

  return <div className='header'>
    <h3>Battleship game</h3>
    <button onClick={() => startGame(isStarted)}>{isStarted ? 'Stop game' : 'Start game'}</button>
  </div>;
}

export default Header;
