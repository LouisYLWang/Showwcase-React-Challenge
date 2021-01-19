import React, { useState } from "react";
import { Button } from "../atoms/Button";
import { StyledInput } from "../atoms/Input";
import { CardBody } from "../atoms/Card";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";

interface HelloPageProps extends RouteComponentProps {}

export const HelloPage: React.FC<HelloPageProps> = ({ history }) => {
  const [name, setName] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem("name", name);
    history.push("/education");
  };

  return (
    <HelloPageContainer>
      <StyledTitle> Hi {name} 👋! Welcome to Showwcase</StyledTitle>
      <CardBody>Type your name and click "Enter" below to begin!</CardBody>
      <StyledInput
        placeholder="your name"
        onChange={onChangeInput}
        value={name}
      ></StyledInput>
      <FancyButton onClick={handleSubmit}>{"Enter"}</FancyButton>
    </HelloPageContainer>
  );
};

const HelloPageContainer = styled.div`
  width: 40vw;
  left: 20vw;
  top: 3vw;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 15px;
  padding: 10vw;
  border-radius: 9px;
`;
const StyledTitle = styled.p`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font: var(--font_0);
  font-size: 30px;
`;

const FancyButton = styled(Button)`
  align-self: center;
  align-self: center;
  height: 50px;
  margin-top: 30px;
  &:hover {
    border-color: #646df6;
    background-color: white;
    color: #646df6;
    font-size: 
  }

  &:hover .icon {
      color: red;
      fill: white;
  }
`;
