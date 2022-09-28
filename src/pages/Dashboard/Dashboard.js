import React from "react";
import {
  DashboardContainer,
  TopCards,
  LowerCards,
  Heading,
} from "./DashboardStyles";
import TotalTallyIn from "../../components/TotalTallyIn/TotalTallyIn";
import TotalTallyOut from "../../components/TotalTallyOut/TotalTallyOut";
import Damaged from "../../components/Damaged/Damaged";
import Dented from "../../components/Dented/Dented";
import Scratched from "../../components/Scratched/Scratched";
import Layout from "../../components/Layout";

function Dashboard({ gateInData, gateOutData }) {
  return (
    <Layout>
      <DashboardContainer>
        <Heading>Dashboard</Heading>

        <TopCards>
          <TotalTallyIn gateInData={gateInData} />
          <TotalTallyOut gateOutData={gateOutData} />
        </TopCards>

        <LowerCards>
          <Damaged gateInData={gateInData} />
          <Dented gateInData={gateInData} />
          <Scratched gateInData={gateInData} />
        </LowerCards>
      </DashboardContainer>
    </Layout>
  );
}

export default Dashboard;
