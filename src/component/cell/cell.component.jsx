import React from "react";
import { StyledCell } from './cell.style'

export const Cell = ({ children, jc, span }) => {
  return <StyledCell jc={jc} span={span}>{children}</StyledCell>;
};
