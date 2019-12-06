import React from 'react'
import Square from '../Square'
import './Board.css'

const Board = ({squares = [], size = 3, className = '', onClick = f => f}) => (
   <div style={ {width: `${Square.SQUARE_SIZE_M * size + 'px'}` } } className={'board ' + className}>
      {
         squares.map( (item) =>
            <Square key={item.id} value={item.value} onClick={ () => onClick(item.id)} size="m"/>
         )
      }
   </div>
)

export default Board