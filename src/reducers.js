import C from './constants.js'

export move = (state = [], action) => {
   switch(action.type) {
      case C.MOVE: 
         let {xIsNext, numSquare} = action;
      
         return [
            Array.apply( null, Array(9) ).map( () => null)
         ]
      
   }   
   
   
}

export moves = (state = [], action) => {
   switch(action.type) {
      case C.MOVE: 
         return [
            ...state,
            Array.
         ]
      
   }
   
   
}
/*
export actualMove = (state, action) => {
   
   
   moves: [
      [null, x ,o ...],
      ...
   
   ]
   
   
}*/