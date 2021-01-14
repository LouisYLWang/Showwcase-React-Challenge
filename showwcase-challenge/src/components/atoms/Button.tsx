import React from "react";
import styled from "styled-components";
import { color } from "styled-system";
import PropTypes from "prop-types";

interface BtnProps {
  text: string;
  onClick: () => void;
}

const StyledBtn = styled.button`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  padding: 10px 30px;
  background: ${"#646df6"};
  outline: none;
  border: 1px solid ${"#646df6"};
  border-radius: 5px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  ${color}
  &:hover  {
      background-color: ${"#4a61bf"};
  }
`;


export const Button: React.FC<BtnProps> = ({ text, onClick }) => {
  return (
    <StyledBtn color="white" onClick={onClick}>
      {text}
    </StyledBtn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
