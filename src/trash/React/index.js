import React from 'react'
import ReactDom from 'react-dom'
import Game from './React/Game'

window.React = React


ReactDom.render(
   <Game size={3}/>,
   document.getElementById('root')
)