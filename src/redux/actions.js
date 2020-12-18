import { MAKE_MOVE } from './constants'
import {
   activeMarkerSelector,
   cellMarkerSelector,
   gameIsOverSelector
} from './selectors';

export const makeMove = (id) => (dispatch, getState) => {
   const state = getState();
   const cellMarker = cellMarkerSelector(state, {id});
   const gameIsOver = gameIsOverSelector(state);

   if (!cellMarker && !gameIsOver) {
      dispatch({
         type: MAKE_MOVE,
         payload: {
            id,
            marker: activeMarkerSelector(state)
         }
      });
   }
};
