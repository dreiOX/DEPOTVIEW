import React from "react";
import { CardContainer, Heading, Paragraph } from "./DamagedStyles";

function Damaged({ gateInData }) {
  const totalDamaged40Ft = gateInData?.filter(
    (inData) =>
      inData.containerCondition === "DAMAGED" && inData.containerSize === "40FT"
  ).length;
  const totalDamaged20Ft = gateInData?.filter(
    (inData) =>
      inData.containerCondition === "DAMAGED" && inData.containerSize === "20FT"
  ).length;
  return (
    <CardContainer>
      <Heading>Damaged</Heading>
      <Paragraph>{totalDamaged40Ft} OF 40FT</Paragraph>
      <Paragraph>{totalDamaged20Ft} OF 20FT</Paragraph>
    </CardContainer>
  );
}

export default Damaged;
