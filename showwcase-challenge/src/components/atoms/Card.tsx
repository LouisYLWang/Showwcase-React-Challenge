import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface CardProps {
  children?: React.ReactNode | React.ReactNode[];
  borderStyle?: string;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.propTypes = {
  children: PropTypes.object.isRequired,
  borderStyle: PropTypes.string,
};

export const StyledCard = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 15px;
  border-radius: 9px;
  border: 1px solid #eaecee;
  position: relative;
  padding: 24px;
  transition-duration: 0.2s;
  margin: 10px;
`;

export const CardBody = styled.p`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`;
