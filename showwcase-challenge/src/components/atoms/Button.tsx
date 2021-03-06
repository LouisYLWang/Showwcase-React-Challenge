import styled from "styled-components";
import { color } from "styled-system";

export const Button = styled.button`
  width: 100%;
  position: relative;
  cursor: pointer;
  margin: 10px 10px 0 0;
  padding: 10px;
  background: #646df6;
  outline: none;
  border: 1px solid #646df6;
  border-radius: 5px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  align-items: center;
  color: white;
  max-width: 200px;  
  transition-duration: 0.2s;

  ${color}
  &:hover  {
      background-color: #4a61bf;
  }

  &:disabled {
      background-color: grey;  
      border: none;
  
  }
`;
