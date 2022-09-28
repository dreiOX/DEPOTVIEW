import React from "react";
import { CardContainer, Heading, Paragraph } from "./DentedStyles";

function Dented({ gateInData }) {
  const totalDented40Ft = gateInData?.filter(
    (inData) =>
      inData.containerCondition === "DENTED" && inData.containerSize === "40FT"
  ).length;
  const totalDented20Ft = gateInData?.filter(
    (inData) =>
      inData.containerCondition === "DENTED" && inData.containerSize === "20FT"
  ).length;

  return (
    <CardContainer>
      <Heading>Dented</Heading>
      <Paragraph>{totalDented40Ft} OF 40FT</Paragraph>
      {/* <Paragraph>--------------</Paragraph> */}
      <Paragraph>{totalDented20Ft} OF 20FT</Paragraph>
    </CardContainer>
  );
}

export default Dented;
