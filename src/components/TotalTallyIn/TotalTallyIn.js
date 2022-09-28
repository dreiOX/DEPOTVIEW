import React from "react";
import { CardContainer, Heading, Paragraph } from "./TotalTallyInStyles";

function TotalTallyIn({ gateInData }) {
  const totalIn40Ft = gateInData?.filter(
    (inData) => inData.containerSize === "40FT"
  ).length;
  const totalIn20Ft = gateInData?.filter(
    (inData) => inData.containerSize === "20FT"
  ).length;

  return (
    <CardContainer>
      <Heading>Total tally in</Heading>
      <Paragraph>{totalIn40Ft} OF 40FT</Paragraph>
      <Paragraph>&</Paragraph>
      <Paragraph>{totalIn20Ft} OF 20FT</Paragraph>
    </CardContainer>
  );
}

export default TotalTallyIn;
