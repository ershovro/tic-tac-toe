import React from 'react'
import './Square.css'

const Square = ({value = null, onClick = f => f}) =>
   <div className="square" onClick={onClick}>
      {value}
   </div>

Object.defineProperty(Square,'SQUARE_SIZE', {
   value: 34,
   writable: false
})

export default Square;