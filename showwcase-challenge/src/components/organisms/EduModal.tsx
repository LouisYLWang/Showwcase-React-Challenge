import React, { useState, forwardRef, useImperativeHandle } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { EduCard } from "./EduCard";

interface EduModalProp {
  props?: any;
  ref?: any;
}

const StyledModal = styled(Modal)`
  color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ModalContainer = styled.div`
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

export const EduModal: React.FC<EduModalProp> = forwardRef((props, ref) => {
  const [value, setValue] = useState(false);
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
        <EduCard></EduCard>
        <Button onClick={hideEduModal}> x </Button>
      </ModalContainer>
    </StyledModal>
  );
});
