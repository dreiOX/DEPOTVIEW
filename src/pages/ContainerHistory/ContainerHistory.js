import React from "react";
import Layout from "../../components/Layout";
import HistoryTable from "./HistoryTable";

function ContainerHistory({ gateInData, gateOutData }) {
  return (
    <Layout>
      <HistoryTable gateInData={gateInData} gateOutData={gateOutData} />
    </Layout>
  );
}

export default ContainerHistory;
