import { css } from "styled-components";
import calcrem from "../utilities/calcrem/calcrem";
import media from "../utilities/media";

const button = css`
  display: inline-block;
  font-family: ${props => props.theme.fonts.Headline};
  font-size: ${calcrem(18)};
  font-weight: bold;
  line-height: ${calcrem(23)};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;


export { button };
