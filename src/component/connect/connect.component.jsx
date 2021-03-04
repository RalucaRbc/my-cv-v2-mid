import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Cell } from "../cell/cell.component";
import { Header } from "../header";
import { StyledIcon, StyledImage } from "./connect.style";

export const Connect = () => {
  const [info, salveazaInfo] = useState({ socialList: [] });
  useEffect(() => {
    // HERE= all data to be taken from server
    fetch("http://localhost:3800/about-me")
      .then((r) => r.json())
      .then((r) => salveazaInfo(r));
  }, []);

  const { title, avatarPath, socialList } = info;
  return (
    <>
      <Cell>
        <Header title={title}></Header>
      </Cell>
      <Cell></Cell>
      <Cell>
        <StyledImage path={avatarPath} />
      </Cell>
      {socialList.map(({ icon }) => {
        return (
          <Cell span="1">
            <Button size="68px" type="disc" bgCuloare="#1875F0">
              <StyledIcon className={`icon__${icon}`} icon={icon} />
            </Button>
          </Cell>
        );
      })}
      <Cell jc="center">
        <Button type="disc" bgCuloare="#50d166">
          <span className="icon__arrow-down"></span>
        </Button>
      </Cell>
    </>
  );
};
