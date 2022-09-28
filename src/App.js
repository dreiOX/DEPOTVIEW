import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContainerManagement from "./pages/ContainerManagement/ContainerManagement";
import GateInTally from "./pages/GateInTally/GateIn";
import GateOutTally from "./pages/GateOutTally/GateOut";
import GateInHistory from "./pages/GateInHistory/GateInHistory";
import GateOutHistory from "./pages/GateOutHistory/GateOutHistory";

function App() {
  const [gateInData, setGateInData] = useState([
    {
      shippingLine: "HAPAG LLOYD",
      containerNumber: "TCLU5314579",
      truckNumber: "LSR 734 XY",
      containerSize: "40FT",
      containerStatus: "ENTERED",
      containerCondition: "DAMAGED",
      containerLocation: "A153",
      gateInDate: "24 SEP",
    },
  ]);
  const [gateOutData, setGateOutData] = useState([
    {
      shippingLine: "HAPAG LLOYD",
      containerNumber: "TCLU5314562",
      truckNumber: "LSR 734 XY",
      containerSize: "40FT",
      containerStatus: "EXITED",
      containerCondition: "DAMAGED",
      containerLocation: "A153",
      gateOutDate: "24 SEP",
    },
  ]);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard gateInData={gateInData} gateOutData={gateOutData} />
            }
          />
          <Route
            path="/Management"
            element={
              <ContainerManagement
                gateInData={gateInData}
                gateOutData={gateOutData}
              />
            }
          />
          <Route
            path="/Gate-in-tally"
            element={<GateInTally setGateInData={setGateInData} />}
          />
          <Route
            path="/Gate-out-tally"
            element={<GateOutTally setGateOutData={setGateOutData} />}
          />
          <Route
            path="/Gate-in-history"
            element={
              <GateInHistory
                gateInData={gateInData}
                gateOutData={gateOutData}
              />
            }
          />
          <Route
            path="/Gate-out-history"
            element={
              <GateOutHistory
                gateInData={gateInData}
                gateOutData={gateOutData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
