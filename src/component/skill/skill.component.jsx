import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Cell } from "../cell/cell.component";
import { Header } from "../header";
import { Subtitle } from "../subtitle/subtitle.component";
import { DescriptionBox } from "../welcome/welcome.style";

export const Skill = () => {
  const [info, saveInfo] = useState({ skillsLegendList: [], categoryList: [] });
  useEffect(() => {
    fetch("http://localhost:3800/skills")
      .then((r) => r.json())
      .then((r) => saveInfo(r));
  }, []);

  const {
    sectionTitle,
    sectionSubtitle,
    skillsLegendList = [],
    categoryList = [],
    description,
  } = info;

  // const skillsssList = () => {
  //   categoryList.map((skillList=[]))
  // }

  return (
    <>
      <Cell>
        <Header title={sectionTitle}></Header>
      </Cell>
      {categoryList.map((list) => {
        const { category, skillList } = list;
        return (
          <Cell key={category}>
            <Subtitle title={category}></Subtitle>
            {skillList.map((lista) => {
              const { icon, skills } = lista;
              return (
                <div>
                  {skills.map((skill) => {
                    return <div>{skill}</div>;
                  })}
                </div>
              );
            })}
          </Cell>
        );
      })}
      <Cell>
        <Subtitle title={sectionSubtitle}></Subtitle>
      </Cell>
      <Cell>
        <DescriptionBox>{description}</DescriptionBox>
      </Cell>
    </>
  );
};
