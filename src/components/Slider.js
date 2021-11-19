import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  /* background-color: coral; */

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-100vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg };
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  background-image: none;
  background: transparent;
`;
const Image = styled.img`
  height: 75%;
  /* margin: 20px 0; */
 
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 150px;
`;

const Title = styled.h1`
  font-size: 90px;
`;
const Description = styled.p`
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

    const handleClick = (direction) =>{

    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")} >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image alt="dc-1" src="https://static.vecteezy.com/ti/vecteur-libre/p1/2119873-dessin-continu-en-une-ligne-de-personnes-danseuse-jeunes-energiques-hommes-et-femmes-pratiquent-danser-pour-effectuer-isole-sur-fond-blanc-professionnel-danseur-concept-vecteur-design-minimaliste-vectoriel.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>DANCING COLOR 1</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolor quidem possimus quaerat mollitia laudantium nostrum odio
              adipisci dolorem autem modi et itaque rem voluptatum neque
              laboriosam nihil, earum error vero obcaecati provident numquam, a
              odit? Minima corrupti aperiam fugiat qui praesentium ex
              consequuntur eaque, repellat, aut, molestias dignissimos? Officia.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image alt="dc-2" src="https://static.vecteezy.com/ti/vecteur-libre/p3/2119855-dessin-continu-en-une-ligne-de-personnes-danseuse-jeunes-energiques-hommes-et-femmes-pratiquent-danser-pour-effectuer-isole-sur-fond-blanc-professionnel-danseur-concept-vecteur-design-minimaliste-vectoriel.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>DANCING COLOR 2</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolor quidem possimus quaerat mollitia laudantium nostrum odio
              adipisci dolorem autem modi et itaque rem voluptatum neque
              laboriosam nihil, earum error vero obcaecati provident numquam, a
              odit? Minima corrupti aperiam fugiat qui praesentium ex
              consequuntur eaque, repellat, aut, molestias dignissimos? Officia.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image alt="dc-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkvS8tJ1UlTHX6X0ZRCAZJdcrwMUwmQxekVgCZQDOrpfb7SZgjc3heNi-vHMjeNgudzc&usqp=CAU" />
          </ImgContainer>
          <InfoContainer>
            <Title>DANCING COLOR 3</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolor quidem possimus quaerat mollitia laudantium nostrum odio
              adipisci dolorem autem modi et itaque rem voluptatum neque
              laboriosam nihil, earum error vero obcaecati provident numquam, a
              odit? Minima corrupti aperiam fugiat qui praesentium ex
              consequuntur eaque, repellat, aut, molestias dignissimos? Officia.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
