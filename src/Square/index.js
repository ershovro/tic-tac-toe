import React from 'react'
import './Square.css'

const Square = ({value = null, size = 's', onClick = f => f}) => (
   <div className={`square square-size-${size}`} onClick={onClick}>
      {value}
   </div>
)

Object.defineProperty(Square,'SQUARE_SIZE_S', {
   value: 34,
   writable: false
})

Object.defineProperty(Square,'SQUARE_SIZE_M', {
   value: 50,
   writable: false
})

Object.defineProperty(Square,'SQUARE_SIZE_L', {
   value: 60,
   writable: false
})

export default Square;