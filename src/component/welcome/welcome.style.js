import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: block;
`
export const CommonTitle = css`
  color: #707070;
  font-weight: 500;
  text-align: center;
`
export const Name = styled.div`
  ${CommonTitle}
  font-size: 48px;
`

export const Job = styled.div`
  ${CommonTitle}
  font-size: 36px;
`
export const Subtitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #808080;
`
