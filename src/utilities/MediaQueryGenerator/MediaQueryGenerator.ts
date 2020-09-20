interface IMap {[index: string]: string};

export default class MediaQueryGenerator {
  breakpointMap: IMap;

  maxBreakpointMap: IMap;

  constructor(breakpointMap:IMap, maxBreakpointMap: IMap) {
    this.breakpointMap = breakpointMap;
    this.maxBreakpointMap = maxBreakpointMap;
  }

  moreThan(breakpoint: string) {
    return `@media(min-width: ${this.breakpointMap[breakpoint]})`;
  }

  lessThan(breakpoint: string) {
    return `@media(max-width: ${this.maxBreakpointMap[breakpoint]})`;
  }

  between(breakpoint1: string, breakpoint2: string) {
    return `@media(min-width: ${this.breakpointMap[breakpoint1]}) and (max-width: ${this.maxBreakpointMap[breakpoint2]})`;
  }
}
