import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/Container";
import { EduCard } from "../organisms/EduCard";
import { EduTopBar } from "../organisms/EduTopBar";
import { SideBar } from "../organisms/SideBar";

export const EduPage: React.FC = () => {
  const TestDiv = styled.div`
    display: block;
    position: absolute;
    left: calc(15vw + 60px);
  `;

  return (
    <Container style={{ left: "20vw" }}>
      <div style={{top: "200px"}}>
        <SideBar></SideBar>
        <TestDiv>
          <EduCard></EduCard>
          <EduCard></EduCard>
          <EduCard></EduCard>
          <EduCard></EduCard>
          <EduCard></EduCard>
        </TestDiv>
      </div>
    </Container>
  );
};
