import React from 'react'
import { BoardContainer, HistoryContainer } from '../../containers'
import './Game.css'

const Game = ({Gamestatus}) => 
   <div className="game">
      <div className="game-boardContainer">
         <span className="game-status"> { Gamestatus } </span>
         <BoardContainer className="game-board"/>
      </div>
      <div className="game-history">
         <span className="game-history-title">history</span>
         <HistoryContainer/>
      </div>
   </div>
       
export default Game