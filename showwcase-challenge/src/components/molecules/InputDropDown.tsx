import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, StyledInput } from "../atoms/Input";
import PropTypes from "prop-types";
import axios from 'axios';

interface InputDropDownProps {
  options?: Array<string>;
  select?: string;
  id:string;
  InputChangeHandler: (id: string, value: string) => void;
}

type School = {
    name: string
}

export const InputDropDown: React.FC<InputDropDownProps> = ({ options = [], id, InputChangeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [schools, setSchools] = useState([])

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchSchools(e.target.value);
    setSelectedOption(e.target.value);
    setIsOpen(true);
  };
  
  const fetchSchools = async (schoolName: string) => {
    let res = await axios.get(
      `http://universities.hipolabs.com/search?name=${schoolName}`
    );
    setSchools(res.data);
  };
  
  useEffect(() => {
    InputChangeHandler(id, selectedOption)
  }, [selectedOption])

  return (
    <StyledDropDown>
      <StyledInput id={id} placeholder={"--type and search your school--"} value={selectedOption} onChange={onChangeInput}></StyledInput>
      {isOpen && (
        <StyledDropDownList>
          {schools.map((school: School, index: number) => (
            <StyledDropDownListItem onClick={onOptionClicked(school.name)} key={index}>
              {school.name}
            </StyledDropDownListItem>
          ))}
        </StyledDropDownList>
      )}
    </StyledDropDown>
  );
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
  position: absolute;
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