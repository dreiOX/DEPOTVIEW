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
} from "./GateOutStyles";
import { AiOutlineMore } from "react-icons/ai";

const GateOutCard = ({ outData, index }) => {
  return (
    <Card key={index}>
      <CardTop>
        <CardId>{outData.containerNumber}</CardId>
        <CardStatus>{outData.containerCondition}</CardStatus>
      </CardTop>

      <CardMiddle>{outData.containerStatus}</CardMiddle>

      <CardBottom>
        <CardDates>
          <p>{outData.dateOut}</p>
        </CardDates>
        <CardIcon>
          <AiOutlineMore />
        </CardIcon>
        <div>
          <p>{outData.truckNumber}</p>
          <p>{outData.containerStatus}</p>
        </div>
      </CardBottom>
    </Card>
  );
};

function GateOutDataCard({ gateOutData }) {
  return (
    <>
      {gateOutData?.length > 0 ? (
        <Container>
          {gateOutData &&
            gateOutData?.map((outData, index) => (
              <GateOutCard key={index} outData={outData} index={index} />
            ))}
        </Container>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default GateOutDataCard;
