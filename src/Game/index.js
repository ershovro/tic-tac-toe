import React from 'react'
import Board from '../Board'
import './Game.css'

export default class Game extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {/* <span className="game-status"> Next player: X </span>*/
      return (
         <div className="game">
            <div className="game-boardContainer">
              
               <Board className="game-board" size={3}/>
            </div>
            <div className="game-info">
            </div>
         </div>
      )         
   }
}