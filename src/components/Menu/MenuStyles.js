import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
  width: 20%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  padding-bottom: 80px;
`;

export const NavLink = styled(Link)`
  padding: 20px 10px 20px 10px;
  display: flex;
  gap: 10px;
  margin: auto 0;
  font-weight: bold;
  text-decoration: none;
  color: black;
  &:hover {
    box-shadow: inset 3px 0 0px 0px #06c258;
    color: #059443;
    transition: 0.2s ease-in;
  }
  &:focus {
    box-shadow: inset 3px 0 0px 0px #06c258;
    color: #059443;
  }
`;
