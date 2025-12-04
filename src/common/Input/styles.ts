import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  padding: 14px 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
  outline: none;

  &:focus {
    border-color: #00B6C4;
    box-shadow: 0 0 0 2px D1D5DB;
  }
`;
