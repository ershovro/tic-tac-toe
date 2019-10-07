import React from 'react'
import './Square.css'

const Square = ({value = null, onClick = f => f}) =>
   <div className="square" onClick={onClick} style={{
      width: `${Square.SQUARE_SIZE + 'px'}`,
      height: `${Square.SQUARE_SIZE + 'px'}`
   } }>
      {value}
   </div>

Object.defineProperty(Square,'SQUARE_SIZE', {
   value: 50,
   writable: false
})

export default Square;