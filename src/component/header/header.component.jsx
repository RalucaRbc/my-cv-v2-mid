import React from 'react'
import * as HS from './header.style'

export const Header = ({ title }) => {
  return (
    <HS.StyledHeader>
      <HS.StyledTitle>{title}</HS.StyledTitle>
    </HS.StyledHeader>
  )
}
