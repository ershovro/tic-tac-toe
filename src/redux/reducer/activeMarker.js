import { MAKE_MOVE } from '../constants';

const initialState = 'X';

const activeMarker = (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case MAKE_MOVE:
         const { marker } = payload;

         return marker === 'X' ? '0' : 'X';
      default:
         return state;

   }
};

export default activeMarker;
