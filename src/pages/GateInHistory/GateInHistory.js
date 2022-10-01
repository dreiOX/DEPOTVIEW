import React from "react";
import Layout from "../../components/Layout";
import GateInHistoryTable from "./GateInHistoryTable";
import GateInSearch from "../../components/Inventory/GateInSearch";
import { Heading } from "../GateInTally/GateInFormStyles";

function GateInHistory({ gateInData, setGateInData }) {
  return (
    <Layout>
      <Heading>Container Gate-In Tally</Heading>
      <GateInSearch gateInData={gateInData} setGateInData={setGateInData} />
      <GateInHistoryTable gateInData={gateInData} />
    </Layout>
  );
}

export default GateInHistory;
