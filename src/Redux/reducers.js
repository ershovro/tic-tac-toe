import C from './constants.js'


function calculateWinner({squares}) {
   const winСombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   for (let [a, b, c] of winСombination) {
      if (squares[a] && squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
         return squares[a].value;
      }
   }
   return null;
}       

const getDefaultMoves = () => [{
   id: 0,
   player: null,
   isActual: true,
   squares: Array.apply( null, Array(3 * 3) ).map( (_, i) => ({
      id: i,
      value: null
   }))
}]

export const move = (state = {}, action) => {
   switch(action.type) {
      case C.ADD_MOVE: 
         let {previousMove = {}, clickedSquareId} = action;
         
         return {
            id: previousMove.id + 1,
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

export const moves = (state = getDefaultMoves(), action) => {
   switch(action.type) {
      case C.ADD_MOVE:
         let
            currActualMove,
            newMoves = [],
            winner;
                     
         for(let m of state) {
            newMoves.push({
               id: m.id, 
               player: m.player,
               squares: m.squares.slice().map( (s) => ({...s}) ),
               isActual: false
            });
            
            if (m.isActual) {
               currActualMove = m;
               break;
            }
         }
         
         winner = calculateWinner(currActualMove);
         
         if ( !currActualMove.squares.find( s => s.id === action.clickedSquareId).value && !winner) {
         
         newMoves.push( move({}, {...action, previousMove: currActualMove}) );
                   
         return newMoves;
         } else {
            return state;
         }
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