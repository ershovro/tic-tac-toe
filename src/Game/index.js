import React from 'react'
import Board from '../Board'
import './Game.css'

export default class Game extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array(this.props.size ** 2).fill(null),
         xIsNext: true
      };
      this.handleSquareClick = this.handleSquareClick.bind(this);
   }

   handleSquareClick(squareNumber) {
      if (!this.state.squares[squareNumber]) {
         let nextSquareState = this.state.squares.slice();

         nextSquareState[squareNumber] = this.state.xIsNext ? 'X' : 'O';
         this.setState({
            squares: nextSquareState,
            xIsNext: !this.state.xIsNext
         })
      }
   }

   render() {
      return (
         <div className="game">
            <div className="game-boardContainer">
               <span className="game-status"> Next player: {this.state.xIsNext ? 'X' : 'O' }  </span>
               <Board className="game-board" {...this.state} {...this.props} onClick={this.handleSquareClick}/>
            </div>
            <div className="game-info">
            </div>
         </div>
      )         
   }
}