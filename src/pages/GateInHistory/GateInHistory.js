import React from "react";
import Layout from "../../components/Layout";
import GateInHistoryTable from "./GateInHistoryTable";
import InventorySearch from "../../components/Inventory/InventorySearch";

function GateInHistory({ gateInData }) {
  return (
    <Layout>
      <InventorySearch />
      <GateInHistoryTable gateInData={gateInData} />
    </Layout>
  );
}

export default GateInHistory;
