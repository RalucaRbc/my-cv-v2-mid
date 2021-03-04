import React from "react";
import { StyledButton, StyledDisc } from "./button.style";

export const Button = ({ children, type, bgCuloare, size}) => {
  return type === "disc" ? (
    <StyledDisc  size= {size} color={bgCuloare}>{children}</StyledDisc>
  ) : (
    <StyledButton>{children}</StyledButton>
  );
};
