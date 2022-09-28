import React from "react";
import { CardContainer, Heading, Paragraph } from "./TotalTallyOutStyles";

function TotalTallyOut({ gateOutData }) {
  const totalOut40Ft = gateOutData?.filter(
    (outData) => outData.containerSize === "40FT"
  ).length;
  const totalOut20Ft = gateOutData?.filter(
    (outData) => outData.containerSize === "20FT"
  ).length;

  return (
    <CardContainer>
      <Heading>Total tally out</Heading>
      <Paragraph>{totalOut40Ft} OF 40FT</Paragraph>
      <Paragraph>&</Paragraph>
      <Paragraph>{totalOut20Ft} OF 20FT</Paragraph>
    </CardContainer>
  );
}

export default TotalTallyOut;
