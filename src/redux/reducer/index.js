import { combineReducers } from 'redux';
import moves from './moves';
import activeMove from './activeMove';
import initGame from './initGame';

const reducer = combineReducers({moves, activeMove, initGame});

export default reducer;
