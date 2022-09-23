import { useState } from "react";
import InventoryDataCard from "./inventoryDataCard";
import InventorySearch from "./InventorySearch";

function Inventory() {
  const inventoryData = [
    {
      id: "a1",
      containerNum: "TCLU4567571",
      containerStatus: "Exited terminal",
      containerLocation: "A153",
      dateIn: "14 Sep, 2022",
      dateOut: "23 Sep, 2022",
      truckNum: "LSR 234 XX",
    },
    {
      id: "a2",
      containerNum: "HAMU1234567",
      containerStatus: "Within terminal",
      containerLocation: "A154",
      dateIn: "15 Sep, 2022",
      dateOut: "24 Sep, 2022",
      truckNum: "LSR 234 XX",
    },
    {
      id: "a3",
      containerNum: "HLXU5678912",
      containerStatus: "Exited terminal",
      containerLocation: "A155",
      dateIn: "16 Sep, 2022",
      dateOut: "25 Sep, 2022",
      truckNum: "LSR 234 XX",
    },
    {
      id: "a4",
      containerNum: "UACU1234569",
      containerStatus: "Exited terminal",
      containerLocation: "A156",
      dateIn: "17 Sep, 2022",
      dateOut: "26 Sep, 2022",
      truckNum: "LSR 234 XX",
    },
  ];

  return (
    <div>
      <InventorySearch />

      <InventoryDataCard
        containerNum={inventoryData[0].containerNum}
        containerStatus={inventoryData[0].containerStatus}
        containerLocation={inventoryData[0].containerLocation}
        dateIn={inventoryData[0].dateIn}
        dateOut={inventoryData[0].dateOut}
        truckNum={inventoryData[0].truckNum}
      />
      <InventoryDataCard
        containerNum={inventoryData[1].containerNum}
        containerStatus={inventoryData[1].containerStatus}
        containerLocation={inventoryData[1].containerLocation}
        dateIn={inventoryData[1].dateIn}
        dateOut={inventoryData[1].dateOut}
        truckNum={inventoryData[1].truckNum}
      />
      <InventoryDataCard
        containerNum={inventoryData[2].containerNum}
        containerStatus={inventoryData[2].containerStatus}
        containerLocation={inventoryData[2].containerLocation}
        dateIn={inventoryData[2].dateIn}
        dateOut={inventoryData[2].dateOut}
        truckNum={inventoryData[2].truckNum}
      />
      <InventoryDataCard
        containerNum={inventoryData[3].containerNum}
        containerStatus={inventoryData[3].containerStatus}
        containerLocation={inventoryData[3].containerLocation}
        dateIn={inventoryData[3].dateIn}
        dateOut={inventoryData[3].dateOut}
        truckNum={inventoryData[3].truckNum}
      />
    </div>
  );
}

export default Inventory;
