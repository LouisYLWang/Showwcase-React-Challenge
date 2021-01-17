import React from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Card, CardBody } from "../atoms/Card";
import styled from "styled-components";
import { Container } from "../atoms/Container";

export const HelloPage: React.FC = () => {
  const StyledTitle = styled.p`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font: var(--font_0);
    font-size: 30px;
  `;

  return (
    <Container>
      <Card>
        <StyledTitle> Hi there 👋! Welcome to Showwcase</StyledTitle>
        <CardBody>Type your name and click "Enter" below to begin!</CardBody>
        <Input placeholder="your name" onChange={() => {}}></Input>
        <Button onClick={() => {}}>{"Enter"}</Button>
      </Card>
    </Container>
  );
};
