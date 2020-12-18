import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import reducer from './reducer';

const enhancer = applyMiddleware(thunk, logger);

export default createStore(reducer, enhancer);


/*
* {
*     cells: {
*
*
*     },
*     activeMarker: 'X',
*
*     moves: {
*     0
* 1
* 2
* 3
* 4: {
*     clickedCell: 5,
*     content: 'X'
* }
*     }
* }
*
*
*
* */
