import React from 'react';

import GameInfo from "../gameInfo/gameInfo";
import Playground from "../playground/playground";
import HistoryMoves from "../historyMoves/historyMoves";
import styles from './game.module.css';

const Game = () => (
   <div className={styles.game}>
      <GameInfo />
      <Playground />
      <HistoryMoves />
   </div>
);

export default Game;