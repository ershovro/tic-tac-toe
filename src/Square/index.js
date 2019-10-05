import React from 'react'
import './Square.css'

const Square = ({value = null, onClick = f => f}) =>
   <div className="square" onClick={onClick}>
      {value}
   </div>

export default Square;