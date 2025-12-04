import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Select } from "@mui/material";
import { NavLink } from "react-router-dom";


export const HeaderSection = styled("header")`
  padding: 8px 0;
  background-color: #FFFFFF;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #005662;
  }
`;

export const NotHidden = styled("div")`
  display: flex;
  align-items: center;

  /* Hide on mobile */
  @media only screen and (max-width: 890px) {
    display: none;
  }

  /* Push the last child (Register button) to the right */
  & > :last-child {
    margin-left: auto;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  font-weight: 700;
  color: #1E1F1F;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;

  &.active {
    color: #00838F;
    border-bottom: 2px solid #00838F;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  font-weight: 700;
  color: #1E1F1F;
  transition: color 0.2s ease-in;

  &:hover,
  &:active,
  &:focus {
    color: #00B6C4;
    text-underline-position: under;
    // text-decoration: #00B6C4 underline;
  }
`;

export const NavSelect = styled(Select)`
  "&:before, &:after": {
    display: "none",
  },

  "&.Mui-focused:before, &.Mui-focused:after": {
    display: "none",
  },

  "& .MuiInputBase-root": {
    border: "none",
  }

  "& .MuiSelect-select": {
    padding: 0,
  },

  "&:hover": {
    backgroundColor: "transparent",
  },

  "&.Mui-focused": {
    backgroundColor: "transparent",
  },
`;
