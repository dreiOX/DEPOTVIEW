import React from "react";
import Menu from "../Menu/Menu";
import Inventory from "../Inventory/Inventory";

function ContainerManagement({ gateInData, gateOutData }) {
  return (
    <div>
      <Menu />
      <Inventory gateInData={gateInData} gateOutData={gateOutData} />
    </div>
  );
}

export default ContainerManagement;
