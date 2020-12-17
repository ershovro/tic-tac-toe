import React from 'react'
import Square from '../Square'
import './Board.css'

const Board = ({squares = [], size = 2, className = '', onClick = f => f}) => (
   <div style={ {width: `${Square.SQUARE_SIZE_M * size + 'px'}` } } className={'board ' + className}>
      {
         Array.apply( null, Array(size ** 2) ).map( (item, i) =>
            <Square key={squares[i].id} value={squares[i].value} onClick={ () => onClick(i)} size="m"/>
         )
      }
   </div>
)

export default Board