import React from 'react'
import { Header } from '../header'
import { LeftMenu } from '../left-menu'
import { Welcome } from '../welcome'
import { Title, Wrapper } from './app.style'

export const App = () => {
  return (
    <Wrapper>
      <Header title="Welcome to My CV"/>
      <Welcome creator="Raluca Ghintuiala"></Welcome>
      <Welcome job="Junior Web Developer"></Welcome>
      <Header title="Let's connect"/>
      <Header title="Skills"/>
      <Header title="Experience"/>
      <Header title="Open source"/>
      <Header title="Portfolio"/>
      <Header title="Recommendations"/>
      <Header title="Reviews"/>
      <Header title="I'm proud"/>
    </Wrapper>
  )
}
