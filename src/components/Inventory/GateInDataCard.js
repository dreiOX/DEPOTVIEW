import React from "react";
import {
  Container,
  Card,
  CardTop,
  CardMiddle,
  CardBottom,
  CardDates,
  CardIcon,
  CardStatus,
  CardId,
} from "./InventoryStyles";
import { AiOutlineMore } from "react-icons/ai";

const GateInCard = ({ inData, index }) => {
  return (
    <Card key={index}>
      <CardTop>
        <CardId>{inData.containerNumber}</CardId>
        <CardStatus>{inData.containerCondition}</CardStatus>
      </CardTop>

      <CardMiddle>{inData.containerLocation}</CardMiddle>

      <CardBottom>
        <CardDates>
          <p>{inData.gateInDate}</p>
          <p>{inData.dateOut}</p>
        </CardDates>
        <CardIcon>
          <AiOutlineMore />
        </CardIcon>
        <div>
          <p>{inData.truckNumber}</p>
          <p>{inData.containerStatus}</p>
        </div>
      </CardBottom>
    </Card>
  );
};

function GateInDataCard({ gateInData }) {
  return (
    <>
      {gateInData?.length > 0 ? (
        <Container>
          {gateInData &&
            gateInData?.map((inData, index) => (
              <GateInCard key={index} inData={inData} index={index} />
            ))}
        </Container>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default GateInDataCard;
