import React, { useState } from "react";
import styled from "styled-components";
import { color } from "styled-system";
import { Input, StyledInput } from "../atoms/Input";
import PropTypes from "prop-types";

interface DropDownProps {
  options?: Array<string>;
  select?: string;
  id?:string;
  InputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DropDown: React.FC<DropDownProps> = ({ options = [], id, InputChangeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    InputChangeHandler(e);
    setIsOpen(true)
  };
  
  return (
    <StyledDropDown>
      <StyledInput id={id} placeholder={"selectedOption"} value={selectedOption} onChange={onChangeInput}></StyledInput>
      {isOpen && (
        <StyledDropDownList>
          {options.map((option: string, index: number) => (
            <StyledDropDownListItem onClick={onOptionClicked(option)} key={index}>
              {option}
            </StyledDropDownListItem>
          ))}
        </StyledDropDownList>
      )}
    </StyledDropDown>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  select: PropTypes.string,
};

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
  user-select: none;
  &:hover {
    background: #f8f9fa;
  }
`;