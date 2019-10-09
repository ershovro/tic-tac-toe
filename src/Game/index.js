import React from 'react'
import Board from '../Board'
import History from '../History'
import './Game.css'

function calculateWinner(squares) {
   const winСombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   for (let [a, b, c] of winСombination) {
      if (squares[a] && squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
         return squares[a].value;
      }
   }
   return null;
}

                       /*   <svg
               className="DropDown__input-arrow"
               width="10"
               height="5"
               viewBox="0 0 10 5"
               fill-rule="evenodd"> 
                  <title>Открыть меню</title>
                  <path d="M10 0L5 5 0 0z"></path>
            </svg>*/
            
export default class Game extends React.Component {
   constructor(props) {
      super(props);
      this.state = {        
         history: [ {
            squares: Array.apply(null, Array(this.props.size ** 2) ).map( (_, index) => ({
               id: index,
               value: null
            }) ),
            moveNumber: 0,
            xIsNext: false
         } ],
         currentMoveNumber: 0
      };
      this.handleSquareClick = this.handleSquareClick.bind(this);
      this.getGameStatus = this.getGameStatus.bind(this);
      this.jumpTo = this.jumpTo.bind(this);
   }
   
   handleSquareClick(squareNumber) {
      let {history, currentMoveNumber} = this.state,
      currentSquares = history[currentMoveNumber].squares,
      currentXIsNext = history[currentMoveNumber].xIsNext,
      continueGameCondition = !calculateWinner(currentSquares) && !currentSquares[squareNumber].value;
      
      if (continueGameCondition) {
         this.setState({
            history: history.slice(0, currentMoveNumber + 1).concat({
               squares: currentSquares.map( (item, i) => ( {
                  value: i === squareNumber ? currentXIsNext ? 'X' : 'O' : item.value,
                  id: item.id
               } )),
               xIsNext: !currentXIsNext,
               moveNumber: currentMoveNumber + 1 
            }),
            currentMoveNumber: currentMoveNumber + 1 
         });
      }
   }
   
   jumpTo(moveTo) {
      this.setState({
         currentMoveNumber: moveTo
      })   
   }  

   getGameStatus() {
      let winner = calculateWinner(this.state.history[ this.state.currentMoveNumber ]);

      return winner
         ? `Winner ${winner}`
         : `Next player: ${this.state.currentMoveNumber % 2 ? 'O' : 'X' }`;
   }

   render() {
      let {history, currentMoveNumber} = this.state;
      
      return (
         <div className="game">
            <div className="game-boardContainer">
               <span className="game-status"> { this.getGameStatus() } </span>
               <Board className="game-board" squares={history[currentMoveNumber].squares} {...this.props} onClick={this.handleSquareClick}/>
            </div>
            <div className="game-history">
               <span className="game-history-title">history    
                  </span>
               <History {...this.state} onClick={this.jumpTo}/>
            </div>
         </div>
      )         
   }
}