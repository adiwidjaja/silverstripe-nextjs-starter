import calcrem from "../../utilities/calcrem/calcrem";

export const xsPx = 300;
export const mdPx = 768;
export const lgPx = 992;
export const xlPx = 1200;
export const xlmPx = 1400;
export const xxlPx = 1600;

export const xs = calcrem(xsPx);
export const md = calcrem(mdPx);
export const lg = calcrem(lgPx);
export const xl = calcrem(xlPx);
export const xlm = calcrem(xlmPx);
export const xxl = calcrem(xxlPx);

const breakpoints = {
  xs,
  md,
  lg,
  xl,
  xlm,
  xxl
};

const breakpointNames = ["xs", "md", "lg", "xl", "xxl"];

const maxBreakpoints = {
  xs: calcrem(xsPx - 1),
  md: calcrem(mdPx - 1),
  lg: calcrem(lgPx - 1),
  xl: calcrem(xlPx - 1),
  xlm: calcrem(xlmPx - 1),
  xxl: calcrem(xxlPx - 1)
};

const isMobile = () =>
  window && typeof window !== "undefined" ? window.innerWidth < mdPx : false;

export default breakpoints;
export { breakpointNames, maxBreakpoints, isMobile };
