import React from 'react'
import Square from '../Square'
import './Board.css'

const SQUARE_SIZE = 34;

/*
const Board = ({size = 2, className = ''}) => 
   <div style={ {width: `${SQUARE_SIZE * size + 'px'}` } } className={'board ' + className}>
      {
         Array.apply( null, Array(size * size) ).map( (item, i) => 
            <Square key={i}/>
         )
      }
   </div>
*/

class Board extends React.Component {
   constructor(ptops) {
      super(ptops);      
      this.state = {
         squares: Array(this.props.size ** 2).fill(null),
         xIsNext: true
      };
      this.handleClick = this.handleClick.bind(this);
   }
   
   handleClick(squareNumber) {
      if (!this.state.squares[squareNumber]) {
         let nextSquareState = this.state.squares.slice();
         
         nextSquareState[squareNumber] = this.state.xIsNext ? 'O' : 'X';
         this.setState({
            squares: nextSquareState,
            xIsNext: !this.state.xIsNext
         })
      }
   }
   
   render() {
      let {size, className} = this.props, {squares, xIsNext} = this.state;
      
      return (
         <div>  
            <span className="status"> Next player: {xIsNext ? 'X' : 'O' } </span>
            <div style={ {width: `${SQUARE_SIZE * size + 'px'}` } } className={'board ' + className}>
               {
                  Array.apply( null, Array(size ** 2) ).map( (item, i) => 
                     <Square key={i} value={squares[i]} onClick={ () => this.handleClick(i)}/>
                  )
               }
            </div>
         </div>
      )
   }
}

export default Board