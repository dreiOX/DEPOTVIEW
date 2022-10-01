import React, { useState } from "react";
import { Input, Top } from "./InventoryStyles";
// import {
//   Data,
//   BottomRow,
// } from "../../pages/GateInHistory/GateInHistoryTableStyles";

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

      {/* {gateInData?.map((data, index) => (
        <BottomRow key={index}>
          <Data>{index + 1}</Data>
          <Data>{data.containerNumber}</Data>
          <Data>{data.containerSize}</Data>
          <Data>{data.containerStatus}</Data>
          <Data>{data.containerLocation}</Data>
          <Data>{data.containerCondition}</Data>
          <Data>{data.gateInDate}</Data>
        </BottomRow>
      ))} */}
    </>
  );
}

export default GateInSearch;
