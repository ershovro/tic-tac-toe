import React from 'react'
import Square from '../Square'
import './Board.css'

const SQUARE_SIZE = 34;


const Board = ({squares = [], size = 2, className = '', onClick = f => f}) =>
   <div style={ {width: `${SQUARE_SIZE * size + 'px'}` } } className={'board ' + className}>
      {
         Array.apply( null, Array(size ** 2) ).map( (item, i) =>
            <Square key={i} value={squares[i]} onClick={ () => onClick(i)}/>
         )
      }
   </div>

export default Board