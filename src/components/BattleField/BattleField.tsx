import React, {useContext, useEffect, useRef, useState} from 'react';
import { H_AXIS, V_AXIS } from '../../constants/constants';
import Tile from '../Tile/Tile';
import './BattleField.css';
import { Context } from '../../context';

function BattleField() {
  const { isStarted, gameState } = useContext<any>(Context);

  const { layout } = gameState;

  let field = [];
  let abcRow = [];
  let numColumn = [];

  for (let v = 0; v < V_AXIS.length; v++) {
    numColumn.push(<span key={`${v + 1}`} className="field-title-item">{v + 1}</span>)
    abcRow.push(<span key={`${H_AXIS[v]}`} className="field-title-item">{H_AXIS[v]}</span>)
    for (let h = 0; h < H_AXIS.length; h++) {
      const tileCoordinates = [H_AXIS[h], V_AXIS[v]];
      let shipPosition: any = null;

      layout?.forEach((ship: any) => {
        const { positions } = ship;
        positions.forEach((position: any) => {
          if (position.every((el: any, i: number) => el === tileCoordinates[i])) {
            shipPosition = {
              // position,
              ship,
            };
          }
        })
      });
      field.push(
        <Tile
          isStarted={isStarted}
          key={`${V_AXIS[v]},${H_AXIS[h]}`}
          tileCoordinates={tileCoordinates}
          layout={layout}
          shipPosition={shipPosition}
        />
      );
    }
  }

  return (
    <div className='grid-wrapper'>
      <div className='field-header'>{abcRow}</div>
      <div className='field-content'>
        <div className='field-grid-container'>
          {field}
        </div>
      </div>
      <div className='sidebar'>{numColumn}</div>
    </div>
  );
}

export default BattleField;
