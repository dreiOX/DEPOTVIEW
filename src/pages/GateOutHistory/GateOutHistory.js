import React from "react";
import Layout from "../../components/Layout";
import GateOutHistoryTable from "./GateOutHistoryTable";

function GateOutHistory({gateOutData}) {
  return (
    <Layout>
      <GateOutHistoryTable gateOutData={gateOutData}/>
    </Layout>
  );
}

export default GateOutHistory;
