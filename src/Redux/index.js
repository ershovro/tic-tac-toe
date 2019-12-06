import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux' 
import storeFactory from './storeFactory.js'

let store = storeFactory();

render(
   <Provider store={store}>
      <h1>123</h1>
   </Provider>
   document.getElementById('root')
);