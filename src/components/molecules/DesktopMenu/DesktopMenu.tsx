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
  menuItems: Array<IMenuItem>;
  currentId: number;
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
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  ${props => props.active ? `
    background-color: ${props.theme.colors.primaryDark};
  ` : null}
`;

//Ensure one slash front, no slash end
const normalizeLink = (href:string) => {
  let normalized = href.startsWith('/') ? href : `/${href}`;
  normalized = (normalized.endsWith('/') && normalized.length > 1) ? normalized.slice(0, -1) : href;
  return normalized;
};

const DesktopMenu: React.FunctionComponent<IDesktopMenu> = ({
  menuItems,
  currentId,
}) => {
  return (
      <DesktopMenuStyled>
        {menuItems.map((item, index) => {

          const link = normalizeLink(item.link);

          return (
              <li key={`item-${index}`}>
                <Link href={{
                  pathname: '/[[...pageurl]]'
                }}  // TODO: Querystring
                      as={`${link}`}
                      passHref
                >
                  <DesktopMenuLink active={item.id == currentId}>{item.menuTitle}</DesktopMenuLink>
                </Link>
              </li>
          );
        })}
      </DesktopMenuStyled>
  );
};

export default DesktopMenu;
