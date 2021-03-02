import React, { useEffect, useState } from "react";
import * as WS from "./welcome.style";
import { Header } from "../header/header.component";
import { Cell } from "../cell/cell.component";

export const Welcome = () => {
  const [data, saveData] = useState({});
  useEffect(() => {
    // HERE= all data to be taken from server
    fetch("http://localhost:3800/welcome")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        saveData(response);
      });
  }, []);
  console.log(data);
  const { title, name, job, subtitle } = data;
  return (
    <>
      <Cell>
        <Header title={title} />
      </Cell>
      <Cell>
        <WS.Name>{name}</WS.Name>
      </Cell>
      <Cell>
        <WS.Job>{job}</WS.Job>
      </Cell>
      <Cell>
        <WS.Subtitle>{subtitle}</WS.Subtitle>
      </Cell>
    </>
  );
};
