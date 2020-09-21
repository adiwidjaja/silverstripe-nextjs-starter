import {addDecorator} from "@storybook/react";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../src/constants/themes/defaultTheme/defaultTheme";
import GlobalStyle from "../src/styles/globals";
import React from "react";

addDecorator(s => <>
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />{s()}
    </>
  </ThemeProvider>
</>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}