import React from "react";
import Layout from "../../components/Layout";
import GateOutHistoryTable from "./GateOutHistoryTable";
import GateOutSearch from "../../components/Inventory/GateOutSearch";
import { HeadingTop } from "./GateOutHistoryTableStyles";

function GateOutHistory({ gateOutData, setGateOutData }) {
  return (
    <Layout>
      <HeadingTop>Container Gate-Out History</HeadingTop>
      <GateOutSearch
        gateOutData={gateOutData}
        setGateOutData={setGateOutData}
      />
      <GateOutHistoryTable gateOutData={gateOutData} />
    </Layout>
  );
}

export default GateOutHistory;
