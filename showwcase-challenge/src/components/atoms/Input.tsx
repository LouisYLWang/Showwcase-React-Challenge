import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface InputProps {
  placeholder: string;
  onClick: () => void;
}

const StyledInput = styled.input`
  width: 100%;
  flex: 1 1 auto;
  color: currentcolor;
  display: block;
  box-sizing: border-box;
  padding: 9px 9px;
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
  background-color: rgb(248, 249, 250);
  transition-duration: 0.2s;
  transition-property: color, border-color, background-color;
  &:hover {
    border-color: rgb(100, 109, 246);
  }

  &:focus {
    border-color: rgb(100, 109, 246);
  }
`;

export const Input: React.FC<InputProps> = ({ placeholder, onClick }) => {
  return (
    <StyledInput placeholder={placeholder} onClick={onClick}></StyledInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
