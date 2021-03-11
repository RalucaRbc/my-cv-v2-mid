import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Cell } from "../cell/cell.component";
import { Header } from "../header";
import { Infobox } from "../infobox";
import { StyledIcon, StyledImage } from "./connect.style";

export const Connect = () => {
  const [info, saveInfo] = useState({ socialList: [] });
  const [selected, updateSelected] = useState(null);
  useEffect(() => {
    // HERE= all data to be taken from server
    fetch("http://localhost:3800/connect")
      .then((r) => r.json())
      .then((r) => saveInfo(r));
  }, []);

  const hide = () => updateSelected(null);
  const { sectionTitle, avatarPath, socialList = [] } = info;

  const selectMe = (icon) => {
    console.log(icon);
    updateSelected(socialList.find((a) => a.icon === icon));
  };

  return (
    <>
      <Cell>
        <Header title={sectionTitle}></Header>
      </Cell>
      <Cell></Cell>
      <Cell>
        <StyledImage path={avatarPath} />
      </Cell>
      {socialList.map(({ icon }) => {
        return (
          <Cell span="1">
            <Button
              onClick={() => selectMe(icon)}
              size="68px"
              type="disc"
              bgCuloare={icon === selected?.icon ? "#D52027" : "#1875F0"}
            >
              <StyledIcon className={`icon__${icon}`} icon={icon} />
            </Button>
          </Cell>
        );
      })}

      {selected && (
        <Cell jc="center">
          <Infobox {...selected} close={hide} />
        </Cell>
      )}

      <Cell jc="center">
        <Button type="disc" bgCuloare="#50d166">
          <span className="icon__arrow-down"></span>
        </Button>
      </Cell>
    </>
  );
};
