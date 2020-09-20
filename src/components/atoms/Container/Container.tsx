import * as React from 'react';
import styled from "styled-components";
import calcrem from "../../../utilities/calcrem/calcrem";
import media from "../../../utilities/media";

interface IContainer {
  children: React.ReactNode,
  className?: string,
}

const ContainerStyled = styled.div`
  width: 100%;
  max-width: ${calcrem(1120)};
  margin:0 auto 30px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;

  ${media.moreThan('md')} {
    margin-bottom: 60px;
  }

  ${media.moreThan('lg')} {
    flex-direction: row;
  }
`;

const ContainerMain = styled.div`
  width: 100%;
  ${media.moreThan('lg')} {
    flex:1 0 auto;
    padding: 0 15px;
  }
`;
const Container: React.FunctionComponent<IContainer> = ({
  children,
  className,
}) =>
  (
    <ContainerStyled>
      <ContainerMain className={className}>
        {children}
      </ContainerMain>
    </ContainerStyled>
  );

export default Container;
