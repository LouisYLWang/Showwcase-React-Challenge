import React, { useState, forwardRef, useImperativeHandle } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { IEducation } from "../../types/Education";
import { Button } from "../atoms/Button";
import { StyledCard } from "../atoms/Card";
import { DropDown } from "../molecules/DropDown";

interface EduModalProp {
  saveEducation: (education: IEducation | any) => void;
  ref?: any;
}

export const EduModal: React.FC<EduModalProp> = forwardRef(({saveEducation}, ref) => {
  const [value, setValue] = useState(false);
  const [education, setEducation] = React.useState<IEducation| {}>()
  
  const handleEducationData = (e: React.FormEvent<HTMLInputElement>) => {
    setEducation({
      ...education,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addEducation = (e: React.FormEvent) => {
    e.preventDefault()
    saveEducation(education)
  }

  
  EduModal.displayName = "EduModal";
  const showEduModal = () => {
    setValue(true);
  };

  const hideEduModal = () => {
    setValue(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showEduModal: showEduModal,
    };
  });

  return (
    <StyledModal isOpen={value}>
      <ModalContainer>
        <CloseButton onClick={hideEduModal}>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1107" width="13" height="13"><path d="M512 377.59953458L780.79935972 108.80017489c38.39995341-38.39995341 96.00004065-38.39995341 134.39999408 0s38.39995341 96.00004065 0 134.39999406L646.40046542 512l268.79935969 268.79935972c38.39995341 38.39995341 38.39995341 96.00004065 0 134.39999408s-96.00004065 38.39995341-134.39999406 0L512 646.40046542 243.20064028 915.19982511c-38.39995341 38.39995341-96.00004065 38.39995341-134.39999408 0-38.39995341-38.39995341-38.39995341-96.00004065 0-134.39999406L377.59953458 512 108.80017489 243.20064028C70.399593 204.80005842 70.399593 147.20075674 108.80017489 108.80017489c38.39995341-38.39995341 96.00004065-38.39995341 134.39999406 0L512 377.59953458Z" fill="white" p-id="1108" data-spm-anchor-id="a313x.7781069.0.i0" className="selected"></path></svg>
        </CloseButton>
        <StyledCard style={{ boxShadow: "Unset", width: "35vw" }}>
          <EduItem>
            <Label>School:</Label>
            <DropDown options={["test1", "test2", "test3"]}></DropDown>
          </EduItem>

          <EduItem>
            <Label>Field of study:</Label>
            <DropDown options={["test1", "test2", "test3"]}></DropDown>
          </EduItem>

          <EduItem style={{ display: "inline-flex" }}>
            <EduItem style={{marginLeft: "0px"}}>
              <Label>Start Date:</Label>
              <DropDown options={["test1", "test2", "test3"]}></DropDown>
            </EduItem>

            <EduItem style={{marginRight: "0px"}}>
              <Label>End Year (or expected):</Label>
              <DropDown options={["test1", "test2", "test3"]}></DropDown>
            </EduItem>
          </EduItem>

          <EduItem>
            <Label>Description:</Label>
            <Description></Description>
          </EduItem>

        </StyledCard>
        <Button onClick={hideEduModal}> submit </Button>
      </ModalContainer>
    </StyledModal>
  );
});

const StyledModal = styled(Modal)`
  color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(Button)`
  width: 30px;
  height: 30px;
  margin: 0px;
  align-self: flex-end;
  background-color: red;
  border: none;
  padding: 8px;
  &:hover {
      background-color: darkred;
  }
`;

const ModalContainer = styled.form`
  flex-direction: column;
  display: flex;
  position: absolute;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 15px;
  background-color: white;
  padding: 15px;
  border-radius: 9px;
  margin-top: 50px;
  align-items: center;
`;

const EduItem = styled.div`
  margin: 0 10px;
  width: calc(100% - 10px);
`;
const Label = styled.p`
  margin-right: 10px;
`;

const Description = styled.textarea`
width: 100%;
flex: 1 1 auto;
color: currentcolor;
display: block;
box-sizing: border-box;
margin: 10px 10px 0 0;
padding: 9px;
font-size: 16px;
text-align: left;
transition-timing-function: ease;
transition-delay: 0s;
font-weight: 400;
line-height: 21px;
border-color: transparent;
border-style: solid;
border-width: 1px;
border-radius: 4px;
text-overflow: ellipsis;
appearance: none;
background-color: #f8f9fa;
transition-duration: 0.2s;
transition-property: color, border-color, background-color;
font-family: Inter, sans-serif;

&:hover {
  border-color: #646df6;
}

&:focus {
  border-color: #646df6;
}
`
