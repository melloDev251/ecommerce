import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  &:hover {
    letter-spacing: 4px;
    transition: 0.4s;
  }
`;

const Button = styled.button`
  font-size: 15px;
  border: none;
  padding: 15px;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    /* color: white;
    background-color: teal;
    letter-spacing: 4px;
    transition: 0.3s;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 5px; */
    background-color: black;
    transform: scale(1.1);
    color: white;
    letter-spacing: 4px;
    border: 2px solid white ;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title> {item.title} </Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
