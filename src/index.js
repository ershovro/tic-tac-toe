import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app';
import './index.css';


render(
   <App />,
   document.getElementById('root')
);