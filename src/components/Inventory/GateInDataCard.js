import React from "react";
import {
  Container,
  Card,
  Heading,
  CardTop,
  CardMiddle,
  CardBottom,
  CardDates,
  CardIcon,
  CardStatus,
  CardId,
  Cover,
} from "./GateInStyles";
import { AiOutlineMore } from "react-icons/ai";

const DataCard = ({ cardData, label, cardColor }) => {
  return cardData.length > 0 ? (
    cardData.map((gateItem, index) => (
      <Card key={index} cardColor={!cardColor}>
        <CardTop>
          <CardId>{gateItem.containerNumber}</CardId>
          <CardStatus cardColor={!cardColor}>
            {gateItem.containerCondition}
          </CardStatus>
        </CardTop>

        <CardMiddle>{gateItem.containerLocation}</CardMiddle>

        <CardBottom>
          <CardDates>
            <p>{gateItem.gateInDate}</p>
            <p>{gateItem.gateOutDate}</p>
            <p>{gateItem.containerSize}</p>
          </CardDates>
          <CardIcon>
            <AiOutlineMore />
          </CardIcon>
          <div>
            <p>{gateItem.truckNumber}</p>
            <p>{gateItem.containerStatus}</p>
          </div>
        </CardBottom>
      </Card>
    ))
  ) : (
    <p>No {label} Data</p>
  );
};

function GateInDataCard({ gateInData, gateOutData }) {
  return (
    <Cover>
      <Container>
        <Heading>Gate In</Heading>
        <DataCard cardData={gateInData} label={"Gate In"} cardColor={true} />
      </Container>

      <Container>
        <Heading>Gate Out</Heading>
        <DataCard cardData={gateOutData} label={"Gate Out"} />
      </Container>
    </Cover>
  );
}

export default GateInDataCard;
