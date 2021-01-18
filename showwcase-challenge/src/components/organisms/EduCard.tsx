import React from "react";
import { StyledCard } from "../atoms/Card";
import styled from "styled-components";
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { IEducation } from "../../types/Education";
import { Button } from "../atoms/Button";

type EduCardProps = {
  cardId?: string,
  education: IEducation,
  removeEducation: (education: IEducation) => void,
}

export const EduCard: React.FC<EduCardProps> = ({cardId, education, removeEducation}) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteEducation = React.useCallback(
    (education: IEducation) => dispatch(removeEducation(education)),
    [dispatch, removeEducation]
  )
  
  const isGraduate = (education: IEducation) => {
    return (education?.degree == "Master") || (education?.degree == "Doctor");
  }

  return (
    <EduCardWarp id={cardId}>
      <DelButton onClick={() => deleteEducation(education)}>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2686" width="13" height="13"><path d="M167.139556 132.152889h207.985777V65.991111c0-36.352 23.608889-65.991111 52.679111-65.991111h219.875556c29.070222 0 52.736 29.582222 52.736 66.048v66.104889h207.985778c29.070222 0 52.736 29.582222 52.736 66.048v66.048H113.777778V198.200889c0.568889-36.408889 24.234667-66.048 53.361778-66.048z m741.262222 184.888889v653.368889a52.792889 52.792889 0 0 1-52.736 52.736H220.444444a52.792889 52.792889 0 0 1-52.736-52.736V264.248889h741.262223v52.736h-0.568889zM379.278222 422.4a52.792889 52.792889 0 0 0-105.472 0v441.230222a52.792889 52.792889 0 0 0 105.472 0V422.456889z m211.512889 0a52.792889 52.792889 0 0 0-105.472 0v441.230222a52.792889 52.792889 0 0 0 105.472 0V422.456889z m212.138667 0a52.792889 52.792889 0 0 0-105.472 0v441.230222a52.792889 52.792889 0 0 0 105.472 0V422.456889z" p-id="2687"></path></svg>
      </DelButton>
      <EduTitle> 
        {isGraduate && "Graduate "}
        {!isGraduate && "Undergraduate "}
        {education?.field} </EduTitle>
      <EduTitle> @ {education?.name} </EduTitle>
      <Date> {education?.startYear} - {education?.endYear}</Date>
      <EduListElement> {education?.description} </EduListElement>
    </EduCardWarp>
  );
};

const EduCardWarp = styled(StyledCard)`
box-shadow: Unset;
width: 35vw;
  display: flex;
  flex-direction: column;
`

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

const DelButton = styled(Button)`
  width: 30px;
  height: 30px;
  margin: 0px;
  align-self: flex-end;
  background-color: white;
  border: 1px solid #646df6;
  padding: 8px;
  position: absolute;

  .icon {
    fill: #646df6;
  }

  &:hover {
      background-color: red;
      border: 1px solid red;
      color: white;
  }

  &:hover .icon {
      background-color: red;
      fill: white;
  }
`;
