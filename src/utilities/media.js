import breakpoints, {
  maxBreakpoints
} from "../constants/breakpoints/breakpoints";
import MediaQueryGenerator from "./MediaQueryGenerator/MediaQueryGenerator";

const media = new MediaQueryGenerator(breakpoints, maxBreakpoints);
export default media;
