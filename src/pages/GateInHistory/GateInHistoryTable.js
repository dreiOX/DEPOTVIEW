import React from "react";
import { Container, Heading, Data, TopRow, BottomRow } from "./GateInHistoryTableStyles";

function GateInHistoryTable({ gateInData }) {
  return (
    <Container>
      
      <div>
        <div>
          <TopRow>
            <Heading>S.No</Heading>
            <Heading>Container Number</Heading>
            <Heading>Container Size</Heading>
            <Heading>Container Status</Heading>
            <Heading>Container Location</Heading>
            <Heading>Container Condition</Heading>
            <Heading>Gate In Date</Heading>
          </TopRow>
        </div>

        <div>
          {gateInData?.map((data, index) => (
            <BottomRow key={index}>
              <Data>{index + 1}</Data>
              <Data>{data.containerNumber}</Data>
              <Data>{data.containerSize}</Data>
              <Data>{data.containerStatus}</Data>
              <Data>{data.containerLocation}</Data>
              <Data>{data.containerCondition}</Data>
              <Data>{data.gateInDate}</Data>
            </BottomRow>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default GateInHistoryTable;
