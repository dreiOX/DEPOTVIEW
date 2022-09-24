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

const InventoryCard = ({ inData, index }) => {
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
          <p>{inData.truckNum}</p>
          <p>{inData.containerStatus}</p>
        </div>
      </CardBottom>
    </Card>
  );
};

function InventoryDataCard({ gateInData }) {
  return (
    <>
      {gateInData?.length > 0 ? (
        <Container>
          {gateInData &&
            gateInData?.map((inData, index) => (
              <InventoryCard key={index} inData={inData} index={index} />
            ))}
        </Container>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default InventoryDataCard;
