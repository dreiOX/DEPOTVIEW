// import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ContainerManagement from "./components/ContainerManagement/ContainerManagement";
import GateInTally from "./components/GateInTally/GateIn";
import GateOutTally from "./components/GateOutTally/GateOut";
import ContainerHistory from "./components/ContainerHistory/ContainerHistory";
import { useState } from "react";

function App() {
  const [inventories, setInventories] = useState([]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Management" element={<ContainerManagement inventories={inventories}/>} />
          <Route path="/Gate-in-tally" element={<GateInTally setInventories={setInventories}/>} />
          <Route path="/Gate-out-tally" element={<GateOutTally />} />
          <Route path="/Container-history" element={<ContainerHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
