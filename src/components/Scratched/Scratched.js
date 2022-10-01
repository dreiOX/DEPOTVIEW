import React from "react";
import { CardContainer, Heading, Paragraph } from "./ScratchedStyles";

function Scratched({ gateInData }) {
  const totalScratched40Ft = gateInData?.filter(
    (inData) =>
      inData.containerCondition === "SCRATCHED" &&
      inData.containerSize === "40FT"
  ).length;
  const totalScratched20Ft = gateInData?.filter(
    (inData) =>
      inData.containerCondition === "SCRATCHED" &&
      inData.containerSize === "20FT"
  ).length;

  return (
    <CardContainer>
      <Heading>Scratched</Heading>
      <Paragraph>{totalScratched40Ft} OF 40FT</Paragraph>
      <Paragraph>{totalScratched20Ft} OF 20FT</Paragraph>
    </CardContainer>
  );
}

export default Scratched;
