import {createStore, combineReducers, applyMiddleware} from 'redux' 
import {moves} from './reducers.js'

const clientLogger = store => next => action => {
   if (action.type) {
      let result
      console.groupCollapsed("dispatching", action.type)
      console.log('prev state', store.getState())
      console.log('action', action)
      result = next(action)
      console.log('next state', store.getState())
      console.groupEnd()
      return result
   } else {
      return next(action)
   }
}

const storeFactory = (initialState = {}) => 
   applyMiddleware(clientLogger)(createStore)(
      combineReducers({moves}),
      initialState
   )

export default storeFactory