import React from 'react'
import * as WS from './welcome.style'

export const Welcome = ({creator, job}) => {
  return (
    <div>
      <WS.StyledCreator>{creator}</WS.StyledCreator>
      <WS.StyledJob>{job}</WS.StyledJob>
    </div>
  )
}
