import React, {useState} from "react";
import styled from "styled-components";
import Container from "../../atoms/Container/Container";
import TextContent from "../../atoms/TextContent/TextContent";
import Headline from "../../atoms/Headline/Headline";
import AnimateHeight from "react-animate-height";
import Button from "../../atoms/Button/Button";

export interface IFaqElement {
  title: string;
  description?: string,
  text: string;
  thumbnail?: string;
}

const FaqElementStyled = styled.div``;

const FaqContainer = styled(Container)`
  display: flex;
`;

const FaqImageContainer = styled.div`
  width: 30%;
`;

const FaqContent = styled.div`
  width: 70%;
`;

const FaqImage = styled.img`
  display: block;
  width: 100%;
  padding-right: 20px;
`;

const FaqElement: React.FunctionComponent<IFaqElement> = ({
  title,
  description,
  text,
  thumbnail,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <FaqElementStyled>
      <FaqContainer>
        {thumbnail ? <FaqImageContainer>
          <FaqImage src={thumbnail}/>
        </FaqImageContainer> : null}
        <FaqContent>
          <Headline>{title}</Headline>
          {description ? <TextContent>{description}</TextContent> : null}
          <AnimateHeight
            duration={ 500 }
            easing="ease-in-out"
            height={ open ? 'auto' : 0 } // see props documentation below
          >
            <TextContent>{text}</TextContent>
          </AnimateHeight>
          <Button onClick={() => setOpen(!open)}>&gt; {open ? 'Fewer infos' : 'More infos'}</Button>
        </FaqContent>
      </FaqContainer>
    </FaqElementStyled>
  );
};

export default FaqElement;
