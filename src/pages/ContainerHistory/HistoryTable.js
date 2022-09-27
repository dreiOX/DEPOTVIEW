import React from "react";
import { Container, Heading, Data, Row } from "./HistoryTableStyles";

function HistoryTable({ gateInData, gateOutData }) {
  return (
    <Container>
      <table>
        <thead>
          <Row>
            <Heading>S.No</Heading>
            <Heading>Container Number</Heading>
            <Heading>Container Size</Heading>
            <Heading>Container Status</Heading>
            <Heading>Container Location</Heading>
            <Heading>Container Condition</Heading>
            <Heading>Gate In Date</Heading>
            <Heading>Gate Out Date</Heading>
          </Row>
        </thead>

        <tbody>
          {gateInData?.map((data, index) => (
            <Row key={index}>
              <Data>{index + 1}</Data>
              <Data>{data.containerNumber}</Data>
              <Data>{data.containerSize}</Data>
              <Data>{data.containerStatus}</Data>
              <Data>{data.containerLocation}</Data>
              <Data>{data.containerCondition}</Data>
              <Data>{data.gateInDate}</Data>
              <Data>15 SEP 2014</Data>
            </Row>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default HistoryTable;
