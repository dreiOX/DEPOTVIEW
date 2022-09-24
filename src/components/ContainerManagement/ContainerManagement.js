import React from "react";
import Menu from "../Menu/Menu";
import Inventory from "../Inventory/Inventory";

function ContainerManagement({ inventories }) {
  return (
    <div>
      <Menu />

      <Inventory inventories={inventories}/>
    </div>
  );
}

export default ContainerManagement;
