import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  border: 1px solid #ccc;
  border-radius: 16px;
  outline: none;

  &:focus {
    border-color: #00B6C4;
    box-shadow: 0 0 0 2px D1D5DB;
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
