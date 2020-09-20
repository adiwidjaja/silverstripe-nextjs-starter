import React, {MouseEventHandler} from "react";
import styled from "styled-components";
import { button } from '../../../styles/button';

export interface IButton {
  children: React.ReactNode,
  href?: string,
  onClick?: MouseEventHandler,
}

const ButtonStyled = styled.a`
  ${button};
`;

const Button: React.FunctionComponent<IButton> = ({
  children,
  href,
  onClick,
}) => (
  <ButtonStyled onClick={onClick} href={href}>
    {children}
  </ButtonStyled>
);

export default Button;
