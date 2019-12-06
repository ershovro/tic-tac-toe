import C from './constants.js'

getDefaultMove = () => [{
   id: 0,
   player: null,
   isActual: true,
   squares: Array( 3 * 3 ).fill(null)
}]

export const move = (state = {}, action) => {
   switch(action.type) {
      case C.ADD_MOVE: 
         let {previousMove = {}, clickedSquareId} = action;
         
         return {
            id: ++previousMove.id,
            player: previousMove.player === 'x' ? 'o' : 'x',
            isActual: true,
            squares: previousMove.squares.map( (square) => {
               return square.id === clickedSquareId ? {...square, value: previousMove.player === 'x' ? 'o' : 'x'} : {...square};        
            } )
         }
      case C.JUMP:
         return {
            ...state,
            isActual: state.id === action.id
         };
      default: 
         return state;      
   }
}

export const moves = (state = getDefaultMove(), action) => {
   switch(action.type) {
      case C.ADD_MOVE: 
         let
            currActualMove,
            newMoves = [];
         
         for(let m of state) {
            newMoves.push({...m, isActual: false});
            
            if (m.isActual) {
               currActualMove = m;
               break;
            }
         }
         
         newMoves.push( move({}, {...action, previousMove: currActualMove}) );
                   
         return newMoves;
      case C.JUMP:
         return state.map( (m) => move(m, action) );
         
      default:
         return state;
      
   }     
}

/*
export actualMove = (state, action) => {
   switch(action.type) {
      case C.MOVE: 
         return [
            ...state,
            Array.
         ];
      case C.JUMP: 
         return action.to;
      default:
         return state;
      
   }
   
}*/