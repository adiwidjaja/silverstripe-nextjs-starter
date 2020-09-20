import { css } from "styled-components";
import calcrem from "../utilities/calcrem/calcrem";
import media from "../utilities/media";

const headline1 = css`
  font-family: ${props => props.theme.fonts.Headline};
  font-size: ${calcrem(28)};
  font-weight: bold;
  line-height: ${calcrem(32)};
  color: ${props => props.theme.colors.primary};

  margin-bottom: 10px;

  ${media.moreThan("md")} {
    font-size: ${calcrem(46)};
    line-height: ${calcrem(56)};

    margin-bottom: 30px;
  }
`;

const headline2 = css`
  font-family: ${props => props.theme.fonts.Headline};
  font-size: ${calcrem(26)};
  font-weight: bold;
  line-height: ${calcrem(30)};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 5px;
  ${media.moreThan("md")} {
    margin-bottom: 20px;
  }
`;

const headline3 = css`
  font-family: ${props => props.theme.fonts.Headline};
  font-size: ${calcrem(20)};
  font-weight: bold;
  line-height: ${calcrem(22)};
  color: ${props => props.theme.colors.text};

  margin-bottom: 15px;

  ${media.moreThan("md")} {
    font-size: ${calcrem(26)};
    line-height: ${calcrem(30)};
  }
`;

const copytext = css`
  font-family: ${props => props.theme.fonts.Copy};
  font-size: ${calcrem(18)};
  font-weight: normal;
  line-height: ${calcrem(23)};
  color: ${props => props.theme.colors.text};

  p {
    margin-bottom: 20px;  
  }

  ${media.moreThan("md")} {
    font-size: ${calcrem(16)};
    line-height: ${calcrem(21)};

    margin-bottom: 21px;
  }
`;

const menutext = css`
  font-family: ${props => props.theme.fonts.Copy};
  font-size: ${calcrem(18)};
  font-weight: normal;
  line-height: ${calcrem(23)};
  color: ${props => props.theme.colors.white};
`;

export { headline1, headline2, headline3, copytext, menutext};
