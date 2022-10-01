import InventoryDataCard from "./InventoryDataCard";

function Inventory({ gateInData, gateOutData }) {
  return <InventoryDataCard gateInData={gateInData} gateOutData={gateOutData} />;
}

export default Inventory;
