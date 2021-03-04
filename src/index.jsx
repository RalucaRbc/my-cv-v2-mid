import React from 'react'
import { render } from 'react-dom'
import { App } from './component/app'
import './index.css'
import './fonts/style.css'

const app = <App />

const here = document.querySelector('#here')
// document.getElementById('here')
render(app, here)
