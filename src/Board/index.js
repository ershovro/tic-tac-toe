import React from 'react'
import Square from '../Square'
import './Board.css'

const SQUARE_SIZE = 34;

const Board = ({size = 2, className = ''}) => 
   <div style={ {width: `${SQUARE_SIZE * size + 'px'}` } } className={'board ' + className}>
      {
         Array.apply( null, Array(size * size) ).map( (item, i) => 
            <Square key={i}/>
         )
      }
   </div>


export default Board