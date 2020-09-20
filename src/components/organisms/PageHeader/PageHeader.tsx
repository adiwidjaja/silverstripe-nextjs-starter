import React from "react";
import styled from "styled-components";
import Container from "../../atoms/Container/Container";
import DesktopMenu, {IMenuItem} from "../../molecules/DesktopMenu/DesktopMenu";
import Headline from "../../atoms/Headline/Headline";

export interface IPage {
  menu?: Array<IMenuItem>;
  siteTitle?: string;
}

const PageHeaderStyled = styled.div`
  background-color: ${props => props.theme.colors.primary};
`;

const HeaderHeadline = styled(Headline)`
  color: ${props => props.theme.colors.white};
`;

const PageHeader: React.FunctionComponent<IPage> = ({
  menu,
  siteTitle,
}) => {
  return (
    <PageHeaderStyled>
      <Container>
        {siteTitle ? <HeaderHeadline>{siteTitle}</HeaderHeadline> : null}
        {menu ? (
          <>
            <DesktopMenu menuItems={menu}/>
          </>
        ) : null}
      </Container>
    </PageHeaderStyled>
  );
};

export default PageHeader;
