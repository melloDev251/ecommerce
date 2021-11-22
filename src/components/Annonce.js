import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  position: sticky;
  position: --webkit-sticky;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

const Annonce = () => {
    return (
        <Container>
            Great website to better buy coloring pages for children with -30% off for this month only! Take advantage now
        </Container>
    )
}

export default Annonce
