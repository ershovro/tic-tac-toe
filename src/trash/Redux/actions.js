import C from './constants.js'

export const addMove = (clickedSquareId) => ({
   type: C.ADD_MOVE,
   clickedSquareId
})

export const jump = (id) => ({
   type: C.JUMP,
   id
})