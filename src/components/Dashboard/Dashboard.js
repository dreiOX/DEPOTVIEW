import React from "react";
import Menu from "../Menu/Menu";
import { DashboardContainer, TopCards, LowerCards } from "./DashboardStyles";
import TotalTallyIn from "../TotalTallyIn/TotalTallyIn";
import TotalTallyOut from "../TotalTallyOut/TotalTallyOut";
import TotalInventory from "../TotalInventory/TotalInventory";
import Damaged from "../Damaged/Damaged";

function Dashboard() {
  return (
    <div>
      <Menu />
      <DashboardContainer>
        <h4>Dashboard</h4>
        <TopCards>
          <TotalInventory />
          <TotalTallyIn />
          <TotalTallyOut />
        </TopCards>
        <LowerCards>
          <Damaged />
          <Damaged />
          <Damaged />
        </LowerCards>
      </DashboardContainer>
    </div>
  );
}

export default Dashboard;
