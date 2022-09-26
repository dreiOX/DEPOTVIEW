import Menu from "../Menu/Menu";
import GateInForm from "./GateInForm";

function GateInTally({ setGateInData }) {
  return (
    <div>
      <Menu />

      <GateInForm setGateInData={setGateInData} />
    </div>
  );
}

export default GateInTally;
