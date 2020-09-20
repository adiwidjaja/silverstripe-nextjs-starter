import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {menutext} from "../../../styles/typography";

export interface IMenuItem {
  id: number,
  className: string,
  title: string,
  menuTitle: string,
  link: string,
  section: boolean
}

export interface IDesktopMenu {
  menuItems: Array<IMenuItem>
}

const DesktopMenuStyled = styled.ul`
  display: flex;
`;

interface IDesktopMenuLink {
  active: boolean,
}

const DesktopMenuLink = styled.a<IDesktopMenuLink>`
  display: block;
  padding:10px 20px;
  background-color: ${props => props.theme.colors.primary};
  ${menutext};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  ${props => props.active ? `
    background-color: ${props.theme.colors.primaryDark};
  ` : null}
`;

//Ensure one slash
const normalizeLink = (href:string) => {
  return href.startsWith('/') ? href : `/${href}`;
};

const DesktopMenu: React.FunctionComponent<IDesktopMenu> = ({
  menuItems
}) => (
  <DesktopMenuStyled>
    {menuItems.map((item, index) => {

      const link = normalizeLink(item.link);

      return (
        <li key={`item-${index}`}>
          <Link href={`/?as=${link}`}
                as={`${link}`}
          >
            <DesktopMenuLink active={item.section}>{item.menuTitle}</DesktopMenuLink>
          </Link>
        </li>
      );
    })}
  </DesktopMenuStyled>
);

export default DesktopMenu;
