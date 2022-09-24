import InventoryDataCard from "./inventoryDataCard";
import InventorySearch from "./InventorySearch";

function Inventory({ inventories }) {
  return (
    <div>
      <InventorySearch />

      <InventoryDataCard inventories={inventories} />
    </div>
  );
}

export default Inventory;
