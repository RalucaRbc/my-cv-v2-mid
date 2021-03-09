import React from "react";
import { StyledButton, StyledDisc } from "./button.style";

export const Button = ({ children, type, bgCuloare, size, onClick }) => {
  return type === "disc" ? (
    <StyledDisc size={size} color={bgCuloare} onClick={onClick}>
      {children}
    </StyledDisc>
  ) : (
    <StyledButton>{children}</StyledButton>
  );
};
