import GateInDataCard from "./GateInDataCard";

function Inventory({ gateInData, gateOutData }) {
  return (
    <div>
      <GateInDataCard gateInData={gateInData} gateOutData={gateOutData} />
    </div>
  );
}

export default Inventory;
