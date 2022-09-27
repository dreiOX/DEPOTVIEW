import React from "react";
import Menu from "../../components/Menu/Menu";
import { DashboardContainer, TopCards, LowerCards } from "./DashboardStyles";
import TotalTallyIn from "../../components/TotalTallyIn/TotalTallyIn";
import TotalTallyOut from "../../components/TotalTallyOut/TotalTallyOut";
import TotalInventory from "../../components/TotalInventory/TotalInventory";
import Damaged from "../../components/Damaged/Damaged";

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
