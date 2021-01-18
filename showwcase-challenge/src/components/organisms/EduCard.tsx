import React from "react";
import { StyledCard } from "../atoms/Card";
import styled from "styled-components";

export const EduCard: React.FC = () => {
  const EduTitle = styled.p`
    font-family: Inter, sans-serif;
    text-align: left;
    font-size: 18px;
    margin: 0;
  `;

  const Date = styled.p`
    font-family: Inter, sans-serif;
    text-align: left;
    font-size: 13px;
    margin: 5px;
    color: #646df6;
  `;

  const EduListElement = styled.li`
    font-family: Inter, sans-serif;
    text-align: left;
    font-size: 13px;
    margin-top: 8px;
    background-color: rgb(248, 249, 250);
    border-radius: 5px;
    padding: 10px;
    list-style: none;
    word-wrap: break-word;
  `;

  return (
    <StyledCard style={{ boxShadow: "Unset", width: "35vw" }}>
      <EduTitle> Graduate Computer Science </EduTitle>
      <EduTitle> @ Showwcase University</EduTitle>
      <Date>August 2019 - present</Date>
      <EduListElement>sadsa</EduListElement>
      <EduListElement>
        sasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsasadsadsa
      </EduListElement>
    </StyledCard>
  );
};
