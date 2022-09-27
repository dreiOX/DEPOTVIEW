import React from "react";
import Menu from "../../components/Menu/Menu";
import HistoryTable from "./HistoryTable";

function ContainerHistory({gateInData}) {
  return (
    <div>
      <Menu />
      <HistoryTable gateInData={gateInData}/>
    </div>
  );
}

export default ContainerHistory;
