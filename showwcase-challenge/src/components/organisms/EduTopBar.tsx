import React from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { StyledCard, CardBody } from "../atoms/Card";
import { Container } from "../atoms/Container";
import styled from "styled-components";

const TopBar = styled.div`
    height: 200px;
    background-color: blue;
    position: absolute;
`

export const EduTopBar: React.FC = () => {

  return (
    <TopBar style={{ boxShadow: "Unset", width: "700px" }}>

    </TopBar>
  );
};
