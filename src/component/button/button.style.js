import styled from "styled-components";

export const StyledDisc = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  background-color: #50d166;
  color: white;
  margin-top: 20px;

  & > span {
    /*  */
  }
`;

export const StyledButton = styled.button`
  background-color: #1875f0;
  margin-top: 30px;
  border-radius: 20px;
  color: white;
  padding: 12px 24px;
  font-size: 10px;
  font-weight: 900;
  border: 0;
  display:flex;
  justify-content: center;
  align-items: center;


  & .text {
    /* color: red; */
  }

  & .icon__download {
    margin-right: 12px;
    font-size: 15px;
  }
`;
