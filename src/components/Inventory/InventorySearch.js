import React from "react";
import { Input } from "./InventoryStyles";
import { Top } from "./InventoryStyles";

function InventorySearch() {
  return (
    <Top>
      <div>
        <p>14 Sep, 2022</p>
        <h3>TOTAL INVENTORY</h3>
      </div>
      <div>
        <Input type="search" defaultValue="Enter container number" />
      </div>
    </Top>
  );
}

export default InventorySearch;
