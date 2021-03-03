import React from "react";
import { Header } from "../header";
import { LeftMenu } from "../left-menu";
import { Welcome } from "../welcome";
import { AboutMe } from "../about-me";
import { GridLayout } from "./app.style";

export const App = () => {
  return (
    <GridLayout>
      <Welcome />
      <AboutMe />
    </GridLayout>
  );
};
