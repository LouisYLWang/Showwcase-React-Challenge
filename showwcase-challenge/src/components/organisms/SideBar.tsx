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
  margin: 0 0 8px 0;
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

const GreetTitle = styled.h1`
    font-family: Inter, sans-serif;
    text-align: left;
    font-size: 18px;
    margin: 5px 0;
`

export const SideBar: React.FC<SideBarProp> = ({}) => {
  const [selected, setSelected] = useState("");

  const onSelected = (e: React.ChangeEvent<HTMLInputElement>) => () => {
    console.log("here");
    e.target.style.fontWeight = "bold";
  };

  return (
    <div style={{ position: "fixed" }}>
      <StyledCard style={{ boxShadow: "Unset", width: "15vw" }}>
          <GreetTitle>Welcome {"NAME"}!</GreetTitle>
          Please complete your education information!
      </StyledCard>

      <StyledCard style={{ boxShadow: "Unset", width: "15vw" }}>
        <Link href="#test123" onClick={() => onSelected}>
          University of Showwcase
        </Link>
        <Link href="#test123">University of Showwcase</Link>
        <Link href="#test123">University of Longlonglong Showwcase</Link>
        <Button>{"+"}</Button>
      </StyledCard>
    </div>
  );
};

SideBar.propTypes = {};
