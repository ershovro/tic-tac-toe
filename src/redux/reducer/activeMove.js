import { MAKE_MOVE, JUMP } from '../constants';

const activeMove = (state = -1, action) => {
   const { type, payload } = action;

   switch (type) {
      case MAKE_MOVE:
         return state + 1;
      case JUMP:
         const { to } = payload;

         return to;
      default:
         return state;
   }
};

export default activeMove;
