import React, { useState } from "react";
import { Input, Top } from "./InventoryStyles";

function GateInSearch({ gateInData, setGateInData }) {
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearchQuery(query);
    const searchList = gateInData?.filter((gateIn) => {
      return (
        gateIn.containerNumber.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    setGateInData(searchList);
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

export default GateInSearch;
