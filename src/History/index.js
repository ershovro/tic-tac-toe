import React from 'react'
import './History.css'

const calculateLiContent = (historyItem = {}) => 
   historyItem.moveNumber ? `Go to move #${historyItem.moveNumber}` : `Go to game start` 

const History = ({history = [], onClick = f => f}) => 
   <ol>
      {
         history.map( (item) => 
            <li key={item.moveNumber}>
               <button onClick={ () => onClick(item.moveNumber) }>
                  { calculateLiContent(item) }
               </button>
            </li> 
         )
      }
   </ol>

export default History;