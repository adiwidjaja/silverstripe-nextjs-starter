import React, { Fragment } from "react";
// this helper is only used for testing but lacks *.test.js ending,
// thus eslint falsely complains about renderer not being in normal dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import defaultTheme from "../../constants/themes/defaultTheme/defaultTheme";

Enzyme.configure({ adapter: new Adapter() });

const rendererWithTheme = {
  create: (component, theme) =>
    renderer.create(
      <ThemeProvider theme={theme || defaultTheme}>
        <Fragment>{component}</Fragment>
      </ThemeProvider>
    )
};

export const renderEnzyme = {
  create: (component, theme) =>
    mount(
      <ThemeProvider theme={theme || defaultTheme}>
        <Fragment>{component}</Fragment>
      </ThemeProvider>
    )
};

const matchMediaFallback = () => {
  return {
    matches: false,
    addListener() {},
    removeListener() {}
  };
};

window.matchMedia = window.matchMedia || matchMediaFallback;

export default rendererWithTheme;
