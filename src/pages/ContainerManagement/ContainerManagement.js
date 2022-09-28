import React from "react";
import Inventory from "../../components/Inventory/Inventory";
// import InventorySearch from "../../components/Inventory/InventorySearch";
import Layout from "../../components/Layout";

function ContainerManagement({ gateInData, gateOutData }) {
  return (
    <Layout>
      <Inventory gateInData={gateInData} gateOutData={gateOutData} />
    </Layout>
  );
}

export default ContainerManagement;
