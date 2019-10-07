import React from 'react'
import Board from '../Board'
import './Game.css'

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
         return squares[a].value;
      }
   }
   return null;
}

export default class Game extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array.apply(null, Array(this.props.size ** 2) ).map( (_, index) => ({
            id: index,
            value: null
         }) ),
         xIsNext: true
      };
      this.handleSquareClick = this.handleSquareClick.bind(this);
      this.getGameStatus = this.getGameStatus.bind(this);
   }

   handleSquareClick(squareNumber) {
      let continueGameCondition = !calculateWinner(this.state.squares) && !this.state.squares[squareNumber].value;

      if (continueGameCondition) {
         let nextSquareState = this.state.squares.slice();

         nextSquareState[squareNumber].value = this.state.xIsNext ? 'X' : 'O';
         this.setState({
            squares: nextSquareState,
            xIsNext: !this.state.xIsNext
         })
      }
   }

   getGameStatus() {
      let winner = calculateWinner(this.state.squares);

      return winner
         ? `Winner ${winner}`
         : `Next player: ${this.state.xIsNext ? 'X' : 'O' }`;
   }

   render() {
      return (
         <div className="game">
            <div className="game-boardContainer">
               <span className="game-status"> { this.getGameStatus() } </span>
               <Board className="game-board" {...this.state} {...this.props} onClick={this.handleSquareClick}/>
            </div>
            <div className="game-info">
            </div>
         </div>
      )         
   }
}