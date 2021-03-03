import React, { useEffect, useState } from "react";
import { Cell } from "../cell/cell.component";
import { Header } from "../header";

export const AboutMe = () => {
  const [info, salveazaInfo] = useState({});
  useEffect(() => {
    // vreau date
    fetch("http://localhost:3800/about-me")
      .then((r) => r.json())
      .then((r) => salveazaInfo(r));
  }, []);

  const { title } = info
  return (
    <>
      <Cell>
        <Header title={title}></Header>
      </Cell>
    </>
  );
};
