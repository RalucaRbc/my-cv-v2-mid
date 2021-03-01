import React from 'react'
import { Header } from '../header'
import { LeftMenu } from '../left-menu'
import { Welcome } from '../welcome'
import { Title, Wrapper } from './app.style'

export const App = () => {
  return (
    <Wrapper>
      <Welcome></Welcome>
    </Wrapper>
  )
}
