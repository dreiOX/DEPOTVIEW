import React from "react";
import { Container, Heading, Data, TopRow, BottomRow } from "./GateOutHistoryTableStyles";

function GateOutHistoryTable({ gateOutData }) {
  return (
    <Container>
      <table>
        <thead>
          <TopRow>
            <Heading>S.No</Heading>
            <Heading>Container Number</Heading>
            <Heading>Container Size</Heading>
            <Heading>Container Status</Heading>
            <Heading>Container Condition</Heading>
            <Heading>Truck Number</Heading>
            <Heading>Gate Out Date</Heading>
          </TopRow>
        </thead>

        <tbody>
          {gateOutData?.map((data, index) => (
            <BottomRow key={index}>
              <Data>{index + 1}</Data>
              <Data>{data.containerNumber}</Data>
              <Data>{data.containerSize}</Data>
              <Data>{data.containerStatus}</Data>
              <Data>{data.containerCondition}</Data>
              <Data>{data.truckNumber}</Data>
              <Data>{data.gateOutDate}</Data>
            </BottomRow>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default GateOutHistoryTable;
