import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/Container";
import { EduCard } from "../organisms/EduCard";
import { SideBar } from "../organisms/SideBar";

export const EduPage: React.FC = () => {
  const StyledTitle = styled.p`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font: var(--font_0);
    font-size: 30px;
  `;

  return (
    <Container>
      <SideBar></SideBar>
        <div >
          <EduCard></EduCard>
          <EduCard></EduCard>
          <EduCard></EduCard>
          <EduCard></EduCard>
          <EduCard></EduCard>
        </div>
    </Container>
  );
};
