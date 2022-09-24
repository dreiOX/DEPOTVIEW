import InventoryDataCard from "./inventoryDataCard";
import InventorySearch from "./InventorySearch";

function Inventory({ gateInData }) {
  return (
    <div>
      <InventorySearch />

      <InventoryDataCard gateInData={gateInData} />
    </div>
  );
}

export default Inventory;
