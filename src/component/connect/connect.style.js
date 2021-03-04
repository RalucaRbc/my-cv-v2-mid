import styled from "styled-components";

export const StyledImage = styled.div`
  padding-top: 100%;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transform: rotate(-2.5deg);
  margin-top: 70px;
  border: 10px solid white;
  position: relative;

  &::after {
    content: "";
    background-image: url(${({ path }) => path});
    background-size: cover;
    background-position: center center;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const StyledIcon = styled.i`
  font-size: ${({ icon }) => icon === "codewars" ? '48' : '30'}px;
  
`;
