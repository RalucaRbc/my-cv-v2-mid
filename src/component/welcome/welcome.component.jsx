import React from 'react'
import * as WS from './welcome.style'
import { Header } from '../header/header.component'

export const Welcome = ({ creator, job }) => {
  return (
    <WS.Wrapper>
      <Header title='Welcome to my CV'/>
      <WS.Name>Raluca Ghintuiala</WS.Name>
      <WS.Job>Junior Web Developer</WS.Job>
      <WS.Subtitle>About Me</WS.Subtitle>
    </WS.Wrapper>
  )
}
