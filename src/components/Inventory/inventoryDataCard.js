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

function InventoryDataCard({ inventories }) {
  return (
    <>
      {inventories?.length > 0 ? (
        <Container>
          {inventories &&
            inventories?.map((inventory, index) => (
              <Card key={index}>
                <CardTop>
                  <CardId>{inventory.containerNumber}</CardId>
                  <CardStatus>{inventory.containerCondition}</CardStatus>
                </CardTop>

                <CardMiddle>{inventory.containerLocation}</CardMiddle>

                <CardBottom>
                  <CardDates>
                    <p>{inventory.gateInDate}</p>
                    <p>{inventory.dateOut}</p>
                  </CardDates>
                  <CardIcon>
                    <AiOutlineMore />
                  </CardIcon>
                  <div>
                    <p>{inventory.truckNum}</p>
                    <p>{inventory.containerStatus}</p>
                  </div>
                </CardBottom>
              </Card>
            ))}
        </Container>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default InventoryDataCard;
