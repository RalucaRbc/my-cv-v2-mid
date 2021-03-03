import React from "react";
import { StyledButton, StyledDisc } from "./button.style";

export const Button = ({ children, type, bgCuloare}) => {
  return type === "disc" ? (
    <StyledDisc color={bgCuloare}>{children}</StyledDisc>
  ) : (
    <StyledButton>{children}</StyledButton>
  );
};
