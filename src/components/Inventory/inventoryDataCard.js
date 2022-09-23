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

function InventoryDataCard(props) {
  return (
    <Container>
      <Card>
        <CardTop>
          <CardId>{props.containerNum}</CardId>
          <CardStatus>{props.containerStatus}</CardStatus>
        </CardTop>

        <CardMiddle>{props.containerLocation}</CardMiddle>

        <CardBottom>
          <CardDates>
            <p>{props.dateIn}</p>
            <p>{props.dateOut}</p>
          </CardDates>
          <CardIcon>
            <AiOutlineMore />
          </CardIcon>
          <div>
            <p>{props.truckNum}</p>
            <p>{props.containerStatus}</p>
          </div>
        </CardBottom>
      </Card>
    </Container>
  );
}

export default InventoryDataCard;
