import React from 'react'
import { render } from 'react-dom'
// import { App } from './component/app/app.component'
// import { App } from './component/app/index.js'
import { App } from './component/app'

const app = <App />

const here = document.querySelector('#here')
// document.getElementById('here')
render(app, here)
