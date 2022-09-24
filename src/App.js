import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ContainerManagement from "./components/ContainerManagement/ContainerManagement";
import GateInTally from "./components/GateInTally/GateIn";
import GateOutTally from "./components/GateOutTally/GateOut";
import ContainerHistory from "./components/ContainerHistory/ContainerHistory";
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
          <Route path="/Container-history" element={<ContainerHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
