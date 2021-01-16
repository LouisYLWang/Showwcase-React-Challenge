import React from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Card } from "../atoms/Card";
import styled from "styled-components";

export const HelloPage: React.FC = () => {
  const StyledTitle = styled.p`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font: var(--font_0);
    font-size: 30px;
  `;

  const StyledBody = styled.p`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font: var(--font_0);
    font-size: 20px;
  `;

  const HelloContainer = styled.div`
    padding: 20px;
  `

  return (
    <HelloContainer>
      <Card>
        <StyledTitle> Hi there 👋! Welcome to Showwcase</StyledTitle>
        <StyledBody>Type your name and click "Enter" below to begin!</StyledBody>
        <Input placeholder="your name" onChange={() => {}}></Input>

        <Button text="Enter" onClick={() => {}}></Button>
      </Card>
    </HelloContainer>
  );
};
