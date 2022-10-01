import React, { useState } from "react";
import { Input, Top } from "./InventoryStyles";

function GateOutSearch({ gateOutData, setGateOutData }) {
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearchQuery(query);
    const searchList = gateOutData?.filter((gateOut) => {
      return (
        gateOut.containerNumber.toLowerCase().indexOf(query.toLowerCase()) !==
        -1
      );
    });
    setGateOutData(searchList);
  };

  return (
    <>
      <Top>
        <Input
          type="text"
          name="search"
          placeholder="Search container number"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Top>
    </>
  );
}

export default GateOutSearch;
