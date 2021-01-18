import React, { useRef, useState } from "react";
import { StyledCard } from "../atoms/Card";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { EduModal } from "../organisms/EduModal";

interface SideBarProp {}

export const Link = styled.a`
  color: currentcolor;
  text-align: left;
  display: flex;
  margin: 0 0 8px 0;
  align-self: flex-start;

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

const GreetTitle = styled.h1`
  font-family: Inter, sans-serif;
  text-align: left;
  font-size: 18px;
  margin: 5px 0;
  align-self: flex-start
`;

const SideBarCard = styled(StyledCard)`
  box-shadow: unset;
  width: 15vw;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SideBar: React.FC<SideBarProp> = ({}) => {
  const [selected, setSelected] = useState("");

  const onSelected = (e: React.ChangeEvent<HTMLInputElement>) => () => {
    console.log("here");
    e.target.style.fontWeight = "bold";
  };

  const ref = useRef(document.createElement("div"));

  const handleClick = () => {
    (ref as any).current.showEduModal();
  };

  return (
    <div style={{ position: "fixed", alignItems: "center" }}>
      <SideBarCard>
        <GreetTitle>Welcome {"NAME"}!</GreetTitle>
        Please complete your education information!
      </SideBarCard>

      <SideBarCard>
        <Link href="#test123" onClick={() => onSelected}>
          University of Showwcase
        </Link>
        <Link href="#test123">University of Showwcase</Link>
        <Link href="#test123">University of Longlonglong Showwcase</Link>
        <Button onClick={handleClick}>
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2602" width="15" height="15"><path d="M912 592h-320v320a80 80 0 0 1-160 0v-320h-320a80 80 0 0 1 0-160h320v-320a80 80 0 0 1 160 0v320h320a80 80 0 0 1 0 160z" p-id="2603" fill="#ffffff"></path></svg>
        </Button>
        <EduModal ref={ref}></EduModal>
      </SideBarCard>
    </div>
  );
};

SideBar.propTypes = {};
