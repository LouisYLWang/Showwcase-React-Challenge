import React, { ReactNode } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface CardProps {  
  children?: React.ReactNode | React.ReactNode[];
}

const StyledCard = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 15px;
  border-radius: 9px;
  position: relative;
  padding: 24px;
  max-width: 400px;
  transition-duration: 0.2s;
`


export const Card: React.FC<CardProps> = ({children}) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.object.isRequired
};
