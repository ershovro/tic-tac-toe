import { connect } from 'react-redux'
import Board from './ui/Board'
import History from './ui/History'
import Game from './ui/Game'
import { addMove, jump } from '../actions'


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
       
function getGameStatus(moves) {
   let actualMove = moves.find( move => move.isActual );
   let winner = calculateWinner(actualMove);
   
   return winner
      ? `Winner ${winner}`
      : `Next player: ${actualMove.player === 'x' ? 'O' : 'X' }`;
}
   
export const BoardContainer = connect(
   ({moves}) => ({
      squares: moves.find( move => move.isActual ).squares
   }),
   (dispath) => ({
      onClick(clickedSquareId) {
         dispath( addMove(clickedSquareId) )
      }
   })
)(Board)

export const HistoryContainer = connect(
   ({moves}) => ({
      history: moves
   }),
   (dispath) => ({
      onClick(id) {
         dispath( jump(id) )
      }
   })
)(History)

export const GameContainer = connect(
   ({moves}) => ({
      Gamestatus: getGameStatus(moves)
   }),
   null
)(Game)