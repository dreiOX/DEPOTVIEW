import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContainerManagement from "./pages/ContainerManagement/ContainerManagement";
import GateInTally from "./pages/GateInTally/GateIn";
import GateOutTally from "./pages/GateOutTally/GateOut";
import ContainerHistory from "./pages/ContainerHistory/ContainerHistory";
import { useState } from "react";

function App() {
  const [gateInData, setGateInData] = useState([]);
  const [gateOutData, setGateOutData] = useState([]);

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
            element={<GateOutTally setGateOutData={setGateOutData} />}
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
