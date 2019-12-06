import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux' 
import storeFactory from './Redux/storeFactory.js'
import { GameContainer } from './Redux/components/containers'

let store = storeFactory();

window.storeFactory = storeFactory;
console.log(storeFactory);
render(
   <Provider store={store}>
      <GameContainer/>
   </Provider>,
   document.getElementById('root')
);