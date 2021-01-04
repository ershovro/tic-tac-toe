import { MAKE_MOVE, JUMP } from './constants'
import {
   activeMoveIndexSelector,
   activePlayerSelector,
   playgroundSelector,
   nextPlayerSelector,
   gameOverSelector
} from './selectors';

export const makeMove = (index) => (dispatch, getState) => {
   const state = getState();
   const playground = playgroundSelector(state);
   const activePlayer = activePlayerSelector(state);
   const nextPlayer = nextPlayerSelector(state);
   const activeMoveIndex = activeMoveIndexSelector(state);
   const gameOver = gameOverSelector(state);

   if (!playground[index] && !gameOver) {
      dispatch({
         type: MAKE_MOVE,
         payload: {
            playground: playground.map( (item, i) => {
               return i === index ? activePlayer : item;
            }),
            current: activePlayer,
            next: nextPlayer,
            activeMoveIndex
         }
      });
   }

   /*const state = getState();
   const cellMarker = cellMarkerSelector(state, {id});
   const gameIsOver = gameIsOverSelector(state);
   const activeMove = activeMoveIdSelector(state);

   if (!cellMarker && !gameIsOver) {
      dispatch({
         type: MAKE_MOVE,
         payload: {
            cellId: id,
            moveId: activeMove + 1,
            marker: activeMarkerSelector(state)
         }
      });
   }*/
};

export const jump = (to) => ({
   type: JUMP,
   payload: { to }
});