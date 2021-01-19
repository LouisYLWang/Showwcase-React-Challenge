import React, { useEffect, useState } from "react";
import { StyledInput } from "../atoms/Input";
import axios from 'axios';
import { StyledDropDown, StyledDropDownList, StyledDropDownListItem } from "./DropDown";

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
