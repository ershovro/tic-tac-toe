import C from './constants.js'

export addMove = (clickedSquareNum) => ({
   type: C.ADD_MOVE,
   clickedSquareNum
})

export jump = (to) => ({
   type: C.JUMP,
   to
})