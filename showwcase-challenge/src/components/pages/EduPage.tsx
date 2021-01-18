import React from "react";
import { Dispatch } from "redux"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delEducation } from "../../store/actionCreators";
import { EducationState, IEducation } from "../../types/Education";
import { Container } from "../atoms/Container";
import { EduCard } from "../organisms/EduCard";
import { SideBar } from "../organisms/SideBar";

export const EduPage: React.FC = () => {
  const educations: readonly IEducation[] = useSelector(
    (state: EducationState) => state.educations,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

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
          {educations.map((education: IEducation) => (
            <EduCard
              cardId={"edu"+education.id}
              key={education.id}
              education={education}
              removeEducation={delEducation}
            />
          ))}
        </TestDiv>
      </div>
    </Container>
  );
};
