import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface DropDownProps {
  options?: Array<string>;
  select?: string;
  id:string;
  InputChangeHandler: (id: string, value: string) => void;
}


export const DropDown: React.FC<DropDownProps> = ({ options = [], id, InputChangeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("--select here--");

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  
  useEffect(() => {
    InputChangeHandler(id, selectedOption);
    const select = document.getElementById(id);
    if (select != undefined) {
      select.innerHTML = selectedOption;
    }
  }, [selectedOption])

  return (
    <StyledDropDown>
      <StyledSelect id={id} onClick={()=> setIsOpen(true)}></StyledSelect>
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

export const StyledDropDown = styled.div`
  position: relative;
`;

export const StyledSelect = styled.div`
  width: 100%;
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
  cursor: pointer;
  text-overflow: ellipsis;
  appearance: none;
  background-color: #f8f9fa;
  transition-duration: 0.2s;
  transition-property: color, border-color, background-color;
  font-family: Inter, sans-serif;
  color: grey;

  &:hover {
    border-color: #646df6;
  }

  &:focus {
    border-color: #646df6;
  }
`

export const StyledDropDownList = styled.ul`
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
  position: absolute;
  z-index: 10;
  &:first-child {
    padding-top: 0em;
  }
`;

export const StyledDropDownListItem = styled.li`
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