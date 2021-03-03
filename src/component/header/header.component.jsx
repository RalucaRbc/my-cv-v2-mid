import React from 'react'
import { Button } from '../button'
import { Cell } from '../cell/cell.component'
import * as HS from './header.style'

export const Header = ({ title }) => {
  return (
    <HS.StyledHeader>
      <HS.StyledTitle>{title}</HS.StyledTitle>
      <Cell jc="center">
        <Button type="disc" bgCuloare="#D52027">
          <span className="icon__youtube"></span>
        </Button>
      </Cell>
    </HS.StyledHeader>
  )
}
