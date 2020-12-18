import { combineReducers } from 'redux';
//import moves from './moves';
import cells from './cells';
import activeMarker from './activeMarker';

const reducer = combineReducers({cells, activeMarker});

export default reducer;
