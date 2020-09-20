import * as React from "react";
import styled from "styled-components";
import { copytext } from "../../../styles/typography";

interface IParagraph {
  children: string;
  className?: string;
  margin?: boolean;
}

interface IParagraphStyled {
  margin: boolean;
}

export const ParagraphStyled = styled.div<IParagraphStyled>`
  ${copytext};
  ${props => (props.margin ? "margin-bottom: 1em" : null)};
`;

const TextContent: React.FunctionComponent<IParagraph> = ({
  children,
  className,
  margin = false
}) => {
  return (
    <ParagraphStyled
      dangerouslySetInnerHTML={{ __html: children }}
      className={className}
      margin={margin}
    />
  );
};

TextContent.defaultProps = {
  className: ""
};

export default TextContent;
