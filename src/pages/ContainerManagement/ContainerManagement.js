import React from "react";
import Menu from "../../components/Menu/Menu";
import Inventory from "../../components/Inventory/Inventory";
import InventorySearch from "../../components/Inventory/InventorySearch"

function ContainerManagement({ gateInData, gateOutData }) {
  return (
    <div>
      <Menu />
      <InventorySearch />
      <Inventory gateInData={gateInData} gateOutData={gateOutData} />
    </div>
  );
}

export default ContainerManagement;
