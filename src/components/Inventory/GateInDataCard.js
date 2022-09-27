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
} from "./GateInStyles";
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

function GateInDataCard({ gateInData, gateOutData }) {
  const isGateInData = gateInData.isGateIndata;
  const isGateOutData = gateOutData.isGateOutdata;
  return (
    <>
      {/* {gateInData?.length > 0 ? (
        <Container>
          {gateInData &&
            gateInData?.map((inData, index) => (
              <GateInCard key={index} inData={inData} index={index} />
            ))}
        </Container>
      ) : (
        <p>No Data</p>
      )} */}
      
      {isGateInData.length > 0 ? (
        <Container>
          {gateOutData &&
            gateInData?.map((inData, index) => (
              <GateInCard key={index} inData={inData} index={index} />
            ))}
        </Container>
      ) : null}

      {isGateOutData.length > 0 ? (
        <Container>
          {gateOutData &&
            gateOutData?.map((outData, index) => (
              <GateOutCard key={index} outData={outData} index={index} />
            ))}
        </Container>
      ) : null}
    </>
  );
}

export default GateInDataCard;
