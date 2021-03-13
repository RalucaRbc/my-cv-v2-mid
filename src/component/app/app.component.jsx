import React from "react";
import { Header } from "../header";
import { LeftMenu } from "../left-menu";
import { Welcome } from "../welcome";
import { Connect } from "../connect";
import { Skill } from "../skill";
import { GridLayout } from "./app.style";

export const App = () => {
  return (
    <GridLayout>
      <Welcome />
      <Connect />
      <Skill />
    </GridLayout>
  );
};
