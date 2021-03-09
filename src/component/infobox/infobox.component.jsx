import React from 'react'
import * as IS from './infobox.style'
import { StyledIcon } from '../connect/connect.style'

export const Infobox = ({ icon, title, description, label, link, close }) => {
  return (
    <>
      {/* <pre onClick={close}> {JSON.stringify({ icon, title, description, label, link }, null, 4)}</pre> */}
      <StyledIcon className="icon__cross" onClick={close}/>
      <IS.StyledTitle>{title}</IS.StyledTitle> 
      <IS.StyledDescription>{description}</IS.StyledDescription>
      <StyledIcon className={`icon__${icon}`}/> 
    </>
  )
}
