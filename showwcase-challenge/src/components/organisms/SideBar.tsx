import React, { Component, useState } from "react";
import { height, width } from "styled-system";
import { Input } from "../atoms/Input";
import { StyledCard } from "../atoms/Card";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Container } from "../atoms/Container";

interface SideBarProp {}

export const Link = styled.a`
  color: currentcolor;
  text-align: left;
  display: flex;
  margin: 8px 0 0 0;
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

export const SideBar: React.FC<SideBarProp> = ({}) => {
  const [selected, setSelected] = useState("");

  const onSelected = (e: React.ChangeEvent<HTMLInputElement>) => () => {
    console.log("here");
    e.target.style.fontWeight = "bold";
  };

  return (
    <Container style={{ position: "fixed" }}>
      <StyledCard style={{ boxShadow: "Unset", width: "200px" }}>
        <Link href="#test123" onClick={() => onSelected}>
          University of Showwcase
        </Link>
        <Link href="#test123">University of Showwcase</Link>
        <Link href="#test123">University of Longlonglong Showwcase</Link>
        <Button>{"+"}</Button>
      </StyledCard>
    </Container>
  );
};

SideBar.propTypes = {};
