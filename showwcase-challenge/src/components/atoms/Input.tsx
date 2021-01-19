import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  flex: 1 1 auto;
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
  text-overflow: ellipsis;
  appearance: none;
  background-color: #f8f9fa;
  transition-duration: 0.2s;
  transition-property: color, border-color, background-color;
  font-family: Inter, sans-serif;

  &:hover {
    border-color: #646df6;
  }

  &:focus {
    border-color: #646df6;
  }
`;
