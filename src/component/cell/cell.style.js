import styled from 'styled-components'

export const StyledCell = styled.div`
  grid-column: 1/-1;

  ${
    ({ jc }) => jc ? `display: flex; justify-content: ${jc}` : ''
  }
`
