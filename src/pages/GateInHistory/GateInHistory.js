import React from "react";
import Layout from "../../components/Layout";
import GateInHistoryTable from "./GateInHistoryTable";
import GateInSearch from "../../components/Inventory/GateInSearch";
import { HeadingTop } from './GateInHistoryTableStyles'

function GateInHistory({ gateInData, setGateInData }) {
  return (
    <Layout>
      <HeadingTop>Container Gate-In History</HeadingTop>
      <GateInSearch gateInData={gateInData} setGateInData={setGateInData} />
      <GateInHistoryTable gateInData={gateInData} />
    </Layout>
  );
}

export default GateInHistory;
