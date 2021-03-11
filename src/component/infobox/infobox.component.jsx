import React from "react";
import * as IS from "./infobox.style";
import { StyledIcon } from "../connect/connect.style";
import { Button } from "../button";
import { Cell } from "../cell/cell.component";

export const Infobox = ({ icon, title, description, label, link, close }) => {
  return (
    <IS.StyledWrapper>
      <IS.WrapperHead>
        <IS.StyledTitle>{title}</IS.StyledTitle>
        <Button onClick={close} type="disc" bgCuloare="#1875F0">
          <span style={{ fontSize: "20px" }} className="icon__cross"></span>
        </Button>
      </IS.WrapperHead>
      <IS.StyledDescription>{description}</IS.StyledDescription>
      <Cell jc="center">
        <Button type="link" link={link} target="_blank">
          <span className="icon__link" style={{marginRight: "8px", fontSize:"13px"}} />
          <span className="text">{label}</span>
        </Button>
      </Cell>
    </IS.StyledWrapper>
  );
};
