import { createSelector } from 'reselect'

export const movesSelector = state => state.moves;
const initGameSelector = state => state.initGame;

export const activeMoveIndexSelector = state => state.activeMove;

const activeMoveSelector = createSelector(
   movesSelector,
   activeMoveIndexSelector,
   (moves, activeMoveIndex) => moves[activeMoveIndex]
);

export const playgroundSelector = createSelector(
   activeMoveSelector,
   initGameSelector,
   (activeMove, initGame) => activeMove ? activeMove.playground : initGame.playground
);

export const activePlayerSelector = createSelector(
   activeMoveSelector,
   initGameSelector,
   (activeMove, initGame) => activeMove ? activeMove.next : initGame.first
);

export const nextPlayerSelector = createSelector(
   activeMoveSelector,
   initGameSelector,
   (activeMove, initGame) => activeMove ? activeMove.current : initGame.second
);

export const gameOverSelector = createSelector(
   activeMoveSelector,
   (activeMove) => activeMove ? activeMove.gameOver : false
);

export const winnerSelector = createSelector(
   gameOverSelector,
   nextPlayerSelector,
   ( gameOver, nextPlayer) =>  gameOver ? nextPlayer : null
);
/*

export const activeMarkerSelector = createSelector(
   activeMoveSelector,
   (activeMove) => activeMove ? (activeMove.marker === 'X' ? '0' : 'X') : 'X'
);

export const cellsSelector = createSelector(
   movesSelector,
   activeMoveIdSelector,
   (moves, activeMoveId) => {
      let cells = {
         1: null,
         2: null,
         3: null,
         4: null,
         5: null,
         6: null,
         7: null,
         8: null,
         9: null,
      };

      return moves.slice(0, activeMoveId).reduce( (cells, move) => {
         cells[move.cellId] = move.marker;

         return cells;
      }, cells);
   }
);

//export const cellsSelector = state => state.cells;

export const cellMarkerSelector = createSelector(
   cellsSelector,
   (_, {id}) => id,
   (cells, id) => {
      return cells[id];
   }
);

export const cellsDataSelector = createSelector(
   cellsSelector,
   (cells) => {
      return Object.keys(cells).map((cellId) => ({
         cellId,
         marker: cells[cellId]
      }));
   }
);

export const gameIsOverSelector = createSelector(
   cellsSelector,
   (cells) => {
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

      for (let [a, b, c] of winCombinations) {
         if (
            cells[a] &&
            cells[a] === cells[b] &&
            cells[a] === cells[c]
         ) {
            return true;
         }
      }
   }
);
export const winnerSelector = createSelector(
   gameIsOverSelector,
   activeMarkerSelector,
   (gameIsOver,  activeMarker) => {
      if (gameIsOver) {
         return activeMarker === 'X' ? '0' : 'X'
      }
   }
);
*/
