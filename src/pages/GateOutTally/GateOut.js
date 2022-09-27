import React from "react";
import Menu from "../../components/Menu/Menu";
import GateOutForm from "./GateOutForm";

function GateOutTally({ setGateOutData }) {
  return (
    <div>
      <Menu />
      <GateOutForm setGateOutData={setGateOutData} />
    </div>
  );
}

export default GateOutTally;
