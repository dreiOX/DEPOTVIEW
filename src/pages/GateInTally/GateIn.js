import Layout from "../../components/Layout";
import GateInForm from "./GateInForm";

function GateInTally({ setGateInData }) {
  return (
    <Layout>
      <GateInForm setGateInData={setGateInData} />
    </Layout>
  );
}

export default GateInTally;
