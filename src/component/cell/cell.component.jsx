import React from "react";
import { StyledCell } from './cell.style'

export const Cell = ({ children, jc }) => {
  return <StyledCell jc={jc}>{children}</StyledCell>;
};
