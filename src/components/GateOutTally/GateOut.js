import React from "react";
import Menu from "../Menu/Menu";
import GateOutForm from "./GateOutForm";

function GateOut({ setGateOutData }) {
  return (
    <div>
      <Menu />
      <GateOutForm setGateOutData={setGateOutData} />
    </div>
  );
}

export default GateOut;
