import './styles.css';
import React from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [clickStartButton, setClickStartButton] = useState(false);

  return (
    <>
      {!clickStartButton && (
        <MenuView
          clickStartButton={clickStartButton}
          setClickStartButton={setClickStartButton}
        />
      )}
      {clickStartButton && <GameView />}
    </>
  );
}
