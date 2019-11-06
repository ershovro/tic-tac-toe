import C from './constants.js'

export move = (xIsNext, numSquare) => ({
   type: C.MOVE,
   numSquare,
   xIsNext
})

export jump = (to) => ({
   type: C.JUMP,
   to
})