import React from "react";
import Inventory from "../../components/Inventory/Inventory";
import Layout from "../../components/Layout";
import { Heading } from "./ContainerManagementStyles";

function ContainerManagement({ gateInData, gateOutData }) {
  return (
    <Layout>
      <Heading>Container Management</Heading>
      <Inventory gateInData={gateInData} gateOutData={gateOutData} />
    </Layout>
  );
}

export default ContainerManagement;
