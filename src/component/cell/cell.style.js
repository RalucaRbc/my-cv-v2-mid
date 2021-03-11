import styled from "styled-components";

export const StyledCell = styled.div`
  ${({ height }) => (height ? `height: ${height}px;` : "")}
  ${({ jc }) => (jc ? `display: flex; justify-content: ${jc};` : "")}

  grid-column: ${({ span }) => (span ? "span 1" : "1/-1")};
`;
