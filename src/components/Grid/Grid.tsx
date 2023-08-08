import React from "react";
import styled from "styled-components";
import { GridProps } from "./types";

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
`;

const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;
const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`

const Grid: React.FC<GridProps> = ({
  SidebarComponents,
  NavbarComponents,
  MainComponents,
  FooterComponents
}) => {
  return (
    <Container>
      <NavBar>{NavbarComponents}</NavBar>
      <Main>{MainComponents}</Main>
      <SideBar>{SidebarComponents}</SideBar>
      <ContentBox></ContentBox>
      <Footer>{FooterComponents}</Footer>
    </Container>   
  )
}