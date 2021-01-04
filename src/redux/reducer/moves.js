import { MAKE_MOVE, JUMP_TO } from '../constants';

const winCombinations = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

const gameIsOver = (playground) => {
   for (let [a, b, c] of winCombinations) {
      if (
         playground[a] &&
         playground[a] === playground[b] &&
         playground[a] === playground[c]
      ) {
         return true;
      }
   }

   return false;
};

const initialState = [];

/*
  moves = [
     {
        playground: [...],
        current: 'x',
        next: 'o'
        gameOver: false
     },
     ...
  ]
*/
const moves = (state = [], action) => {
   const { type, payload } = action;

   switch (type) {
      case MAKE_MOVE:
         const { playground, current, next, activeMoveIndex } = payload;

         return [
            ...state.slice(0, activeMoveIndex + 1),
            {
               gameOver: gameIsOver(playground),
               playground,
               current,
               next
            }
         ];
      default:
         return state;
   }
}

export default moves;
