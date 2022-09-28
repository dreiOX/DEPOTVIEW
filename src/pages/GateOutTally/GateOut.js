import React from "react";
import GateOutForm from "./GateOutForm";
import Layout from "..//../components/Layout";

function GateOutTally({ setGateOutData }) {
  return (
    <Layout>
      <GateOutForm setGateOutData={setGateOutData}  />
    </Layout>
  );
}

export default GateOutTally;
