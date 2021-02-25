import React from 'react'
import { Header } from '../header'
import { LeftMenu } from '../left-menu'
import { Footer } from '../footer'
import { Title, Wrapper } from './app.styled'

export const App = () => {
  return (
    <Wrapper>
      <Title> Smth smth </Title>
      <Header />
      <LeftMenu />
      <Footer />
    </Wrapper>
  )
}
