import React from "react";
import { Dispatch } from "redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delEducation } from "../../store/actionCreators";
import { EducationState, IEducation } from "../../types/Education";
import { Container } from "../atoms/Container";
import { EduCard, PlaceholderEduCard } from "../organisms/EduCard";
import { SideBar } from "../organisms/SideBar";

export const EduPage: React.FC = () => {
  const educations: readonly IEducation[] = useSelector(
    (state: EducationState) => state.educations,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const TestDiv = styled.div`
    display: block;
    position: absolute;
    left: calc(15vw + 60px);
  `;

  return (
    <Container style={{ left: "20vw" }}>
      <div style={{ top: "200px" }}>
        <SideBar></SideBar>
        <TestDiv>
          {educations.length == 0 && 
            <PlaceholderEduCard>
              <svg className="icon" viewBox="0 0 1217 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3545" width="48" height="48"><path d="M1059.037405 363.436973c12.952216 22.472649-16.19027-41.741838-64.768-41.741838H223.467243c-29.142486 0-48.584649 12.841514-64.774919 38.524541C142.502054 385.909622 0 601.02573 0 645.971027v292.185946c0 44.945297 38.863568 83.476757 84.203243 83.476757h1049.323243c45.339676 0 84.203243-35.314162 84.203244-83.483676V645.977946c0-41.734919-158.692324-282.540973-158.692325-282.540973s-22.673297-41.741838 0 0zM783.754378 626.715676c-19.435243 0-35.632432 9.631135-38.863567 28.893405v6.420757c0 73.845622-61.536865 134.84973-136.025946 134.84973s-136.025946-61.004108-136.025946-134.84973v-9.631135c-9.714162-25.683027-38.863568-25.683027-38.863568-25.683027H74.489081l123.066811-221.543784s22.666378-38.524541 55.060757-38.524541h725.455567c25.911351 0 29.149405 9.631135 48.57773 38.524541l123.07373 221.543784h-365.969298zM346.540973 206.114595L252.60973 116.203243c-9.721081-6.427676-9.721081-22.479568 0-32.110702 9.714162-9.631135 25.904432-9.631135 35.625513 0l93.917406 86.694054c9.721081 9.631135 9.721081 25.683027 0 35.314162-9.721081 6.420757-25.904432 9.631135-35.618595 0z m255.847784-38.538379c-3.238054-3.210378-6.476108-9.624216-6.476108-16.051892L592.674595 26.30573c0-12.841514 9.714162-25.683027 22.666378-25.683027 12.959135-3.210378 25.911351 6.420757 25.911351 19.26227l3.238054 125.218595c0 9.631135-6.476108 19.26227-16.19027 22.479567-9.714162 6.413838-19.435243 6.413838-25.911351 0z m239.664432 32.103784c-3.244973-3.203459-6.483027-9.624216-6.483027-16.044973 0-6.420757 3.238054-12.841514 6.483027-16.051892l87.434379-93.114811c9.714162-9.631135 25.911351-9.631135 35.632432 0 9.714162 9.631135 9.714162 25.683027 0 35.314162l-87.441297 93.114811c-3.251892 3.210378-9.721081 6.420757-16.197189 6.420757-9.714162-3.210378-16.19027-3.210378-19.428325-9.631135z" p-id="3546" fill="#646df6"></path></svg>
              <p>No Education Added</p>
            </PlaceholderEduCard>
          }
          {educations.length != 0 && 
            educations.map((education: IEducation) => (
              <EduCard
                cardId={"edu" + education.id}
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
