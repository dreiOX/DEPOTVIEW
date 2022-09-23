import React from "react";
import { NavLink, Nav, Logo } from "./MenuStyles";
import {
  MdDashboard,
  MdOutlineHistory,
  MdCallReceived,
  MdCallMade,
} from "react-icons/md";
import { SiOpenbadges } from "react-icons/si";
import { BsBoundingBox } from "react-icons/bs";

function Menu() {
  return (
    <Nav>
      <Logo>
        <p>
          <SiOpenbadges />
          Depotview
        </p>
      </Logo>

      <div>
        <NavLink to="/">
          <MdDashboard />
          Dashboard
        </NavLink>
        <NavLink to="/Management">
          <BsBoundingBox />
          Container management
        </NavLink>
        <NavLink to="/Gate-in-tally">
          <MdCallReceived />
          Gate-in tally
        </NavLink>
        <NavLink to="/Gate-out-tally">
          <MdCallMade />
          Gate-out tally
        </NavLink>
        <NavLink to="/Container-history">
          <MdOutlineHistory />
          Container History
        </NavLink>
      </div>
    </Nav>
  );
}

export default Menu;
