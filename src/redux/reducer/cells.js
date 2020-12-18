import { MAKE_MOVE } from '../constants';

const initialState = {
   0: null,
   1: null,
   2: null,
   3: null,
   4: null,
   5: null,
   6: null,
   7: null,
   8: null,
};

const cells = (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case MAKE_MOVE:
         const { id, marker } = payload;
         return {
            ...state,
            [id]: marker
         };
      default:
         return state;

   }
};


export default cells;
