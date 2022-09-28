import React from "react";
import GateOutForm from "./GateOutForm";
import Layout from "..//../components/Layout";

function GateOutTally({ setGateOutData, gateInData }) {
  return (
    <Layout>
      <GateOutForm setGateOutData={setGateOutData} gateInData={gateInData} />
    </Layout>
  );
}

export default GateOutTally;
