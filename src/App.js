import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContainerManagement from "./pages/ContainerManagement/ContainerManagement";
import GateInTally from "./pages/GateInTally/GateIn";
import GateOutTally from "./pages/GateOutTally/GateOut";
import ContainerHistory from "./pages/ContainerHistory/ContainerHistory";
import { useState } from "react";

function App() {
  const [gateInData, setGateInData] = useState([
    {
      shippingLine: "HAPAG LLOYD",
      containerNumber: "TCLU5314579",
      truckNumber: "LSR 734 XY",
      containerSize: "40FT",
      containerCondition: "DAMAGED",
      containerLocation: "A153",
      gateInDate: "24 SEP",
      gateOutDate: "",
    },
  ]);
  const [gateOutData, setGateOutData] = useState([
    {
      shippingLine: "HAPAG LLOYD",
      containerNumber: "TCLU5314562",
      truckNumber: "LSR 734 XY",
      containerSize: "40FT",
      containerCondition: "DAMAGED",
      containerLocation: "A153",
      gateOutDate: "24 SEP",
    },
  ]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
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
            element={
              <GateOutTally
                setGateOutData={setGateOutData}
                gateInData={gateInData}
              />
            }
          />
          <Route
            path="/Container-history"
            element={
              <ContainerHistory
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
