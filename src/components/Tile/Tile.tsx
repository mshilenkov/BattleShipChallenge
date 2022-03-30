import React, {useEffect, useRef, useState} from 'react';
import './Tile.css';

function Tile({ isStarted, tileCoordinates, shipPosition }: any) { //TODO any

  const [shot, setShot] = useState<any>([]); //TODO any

  const tileEl = useRef(null);

  interface IShotData {
    shotCoordinates?: Array<string>;
    ship?: any; //TODO any
    isEmpty?: boolean;
  }

  const handleClick = (shotCoordinates: Array<string>, shipPosition: any) => {
    const tile = tileEl.current;

    if(!isStarted) {
      return;
    }
    if (shipPosition) {
      // @ts-ignore
      tile.innerHTML = '&#128293';
      setShot((arr: any) => [...arr, shotCoordinates]);
    }
    else {
      // @ts-ignore
      tile.innerHTML = '&#10060';
    }
  };

  console.log(shot);

  return (
      <div className={`
        ${ isStarted
            ? "tile-active tile"
            : "tile"
        }`}
        onClick={() => handleClick(tileCoordinates, shipPosition)}
       ref={tileEl}
      >
      </div>
  )
}

export default Tile;
