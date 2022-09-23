// import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ContainerManagement from "./components/ContainerManagement/ContainerManagement";
import GateInTally from "./components/GateInTally/GateIn";
import GateOutTally from "./components/GateOutTally/GateOut";
import ContainerHistory from "./components/ContainerHistory/ContainerHistory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Management" element={<ContainerManagement />} />
          <Route path="/Gate-in-tally" element={<GateInTally />} />
          <Route path="/Gate-out-tally" element={<GateOutTally />} />
          <Route path="/Container-history" element={<ContainerHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
