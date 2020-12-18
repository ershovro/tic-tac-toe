import {createSelector} from 'reselect'

export const activeMarkerSelector = state => state.activeMarker;

export const cellsSelector = state => state.cells;

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
      return Object.keys(cells).map((cellNum) => ({
         cellNum,
         marker: cells[cellNum]
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
