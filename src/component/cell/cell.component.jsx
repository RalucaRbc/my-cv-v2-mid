import React from "react";
import { StyledCell } from './cell.style'

export const Cell = ({ children, jc, span, height }) => {
  return <StyledCell height={height} jc={jc} span={span}>{children}</StyledCell>;
};
