import React from 'react'
//import './History.css'

const calculateLiContent = (historyItem = {}) => 
   historyItem.id > 0 ? `Go to move #${historyItem.moveNumber}` : `Go to game start` 

const History = ({history = [], onClick = f => f}) => 
   <ol>
      {
         history.map( (item) => 
            <li key={item.id}>
               <button onClick={ () => onClick(item.id) }>
                  { calculateLiContent(item) }
               </button>
            </li> 
         )
      }
   </ol>

export default History;