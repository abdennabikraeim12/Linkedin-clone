import React from "react";
import styled from "styled-components";
import LeftSide from "./Leftside";
import RightSide from "./Rightside";
import Main from "./Main";
const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a href="#">Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide/>
        <Main/>
        <RightSide />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftSide main rightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;