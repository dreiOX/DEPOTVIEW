import React from "react";
import Menu from "../Menu/Menu";
import Inventory from "../Inventory/Inventory";

function ContainerManagement({ gateInData }) {
  return (
    <div>
      <Menu />

      <Inventory gateInData={gateInData} />
    </div>
  );
}

export default ContainerManagement;
