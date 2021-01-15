import React, { useState } from "react";
import styled from "styled-components";
import { color } from "styled-system";
import { Input } from "../atoms/Input";
import PropTypes from "prop-types";

interface DropDownProps {
  options?: any;
}

const StyledDropDown = styled.div`
  width: 100%;
`;

const StyledDropDownList = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 5px;
  max-height: 12rem;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  color: currentcolor;
  font-size: 1.3rem;
  font-weight: 500;
  overflow: auto;
  &:first-child {
    padding-top: 0em;
  }
`;

const StyledDropDownListItem = styled.li`
  cursor: pointer;
  list-style: none;
  text-align: left;
  padding: 9px 12px;
  font-size: 16px;

  &:hover {
    background: #f8f9fa;
  }
`;

export const DropDown: React.FC<DropDownProps> = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <StyledDropDown>
      <Input placeholder="123" onClick={() => setIsOpen(!isOpen)}></Input>
      {isOpen && (
        <StyledDropDownList>
          {options.map((option: React.ReactNode, index: number) => (
            <StyledDropDownListItem onClick={() => {}} key={index}>
              {option}
            </StyledDropDownListItem>
          ))}
        </StyledDropDownList>
      )}
    </StyledDropDown>
  );
};

DropDown.propTypes = {
  options: PropTypes.object,
};