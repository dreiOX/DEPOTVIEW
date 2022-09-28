import React from "react";
import { DashboardContainer, TopCards, LowerCards } from "./DashboardStyles";
import TotalTallyIn from "../../components/TotalTallyIn/TotalTallyIn";
import TotalTallyOut from "../../components/TotalTallyOut/TotalTallyOut";
import TotalInventory from "../../components/TotalInventory/TotalInventory";
import Damaged from "../../components/Damaged/Damaged";
import Layout from "../../components/Layout";

function Dashboard() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Dashboard;
