import * as React from "react";
import styled from "styled-components";
import { headline1, headline2, headline3 } from "../../../styles/typography";

interface HeadlineProps {
  level: number;
}

export const HeadlineStyled = styled.h1<HeadlineProps>`
  ${props => (props.level === 1 ? headline1 : null)}
  ${props => (props.level === 2 ? headline2 : null)}
  ${props => (props.level === 3 ? headline3 : null)}
`;

interface IHeadline {
  /** Content of headline */
  children: React.ReactNode;
  /** Level of headline */
  level?: number;
  /** HTML-Level of headline */
  as?: "h1" | "h2" | "h3" | "p" | null;
  /** Optional class name */
  className?: string;
}

const Headline: React.FunctionComponent<IHeadline> = ({
  children,
  level = 1,
  as,
  className,
}) => {
  const useLevel = level || 1;
  let useAs = as || "h1";

  //Strange workaround to as-typecheck
  if (!as) {
    if (level === 2) {
      useAs = "h2";
    }
    if (level === 3) {
      useAs = "h3";
    }
  }
  return (
    <HeadlineStyled
      className={className}
      level={useLevel}
      as={useAs}
    >
      {children}
    </HeadlineStyled>
  );
};

export default Headline;
