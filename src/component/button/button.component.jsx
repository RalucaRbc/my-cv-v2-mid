import React from "react";
import { StyledButton, StyledDisc } from "./button.style";

export const Button = ({ children, type }) => {
  return type === "disc" ? (
    <StyledDisc>{children}</StyledDisc>
  ) : (
    <StyledButton>{children}</StyledButton>
  );
};
