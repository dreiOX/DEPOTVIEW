import Menu from "../Menu/Menu";
import GateInForm from "./GateInForm";

function GateIn({ setInventories }) {
  
  return (
    <div>
      <Menu />

      <GateInForm setInventories={setInventories}/>
    </div>
  );
}

export default GateIn;
