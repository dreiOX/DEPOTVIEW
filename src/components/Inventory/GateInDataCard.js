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

// const GateInCard = ({ inData, index }) => {
//   return (
//     <Card key={index}>
//       <CardTop>
//         <CardId>{inData.containerNumber}</CardId>
//         <CardStatus>{inData.containerCondition}</CardStatus>
//       </CardTop>

//       <CardMiddle>{inData.containerLocation}</CardMiddle>

//       <CardBottom>
//         <CardDates>
//           <p>{inData.gateInDate}</p>
//           <p>{inData.dateOut}</p>
//         </CardDates>
//         <CardIcon>
//           <AiOutlineMore />
//         </CardIcon>
//         <div>
//           <p>{inData.truckNumber}</p>
//           <p>{inData.containerStatus}</p>
//         </div>
//       </CardBottom>
//     </Card>
//   );
// };

const GateInCard = ({ gateInData }) => {
  return gateInData.map((gateItem, index) => (
    <Card key={index}>
      <CardTop>
        <CardId>{gateItem.containerNumber}</CardId>
        <CardStatus>{gateItem.containerCondition}</CardStatus>
      </CardTop>

      <CardMiddle>{gateItem.containerLocation}</CardMiddle>

      <CardBottom>
        <CardDates>
          <p>{gateItem.gateInDate}</p>
          <p>{gateItem.dateOut}</p>
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
  ));
};

// const GateOutCard = ({ outData }) => {
//   return (
//     <Card>
//       <CardTop>
//         <CardId>{outData.containerNumber}</CardId>
//         <CardStatus>{outData.containerCondition}</CardStatus>
//       </CardTop>

//       <CardMiddle>{outData.containerStatus}</CardMiddle>

//       <CardBottom>
//         <CardDates>
//           <p>{outData.dateOut}</p>
//         </CardDates>
//         <CardIcon>
//           <AiOutlineMore />
//         </CardIcon>
//         <div>
//           <p>{outData.truckNumber}</p>
//           <p>{outData.containerStatus}</p>
//         </div>
//       </CardBottom>
//     </Card>
//   );
// };

const GateOutCard = ({ gateOutData }) => {
  return gateOutData.map((gateOutItems, index) => (
    <Card key={index}>
      <CardTop>
        <CardId>{gateOutItems.containerNumber}</CardId>
        <CardStatus>{gateOutItems.containerCondition}</CardStatus>
      </CardTop>

      <CardMiddle>{gateOutItems.containerStatus}</CardMiddle>

      <CardBottom>
        <CardDates>
          <p>{gateOutItems.dateOut}</p>
        </CardDates>
        <CardIcon>
          <AiOutlineMore />
        </CardIcon>
        <div>
          <p>{gateOutItems.truckNumber}</p>
          <p>{gateOutItems.containerStatus}</p>
        </div>
      </CardBottom>
    </Card>
  ));
};

const DataCard = ({ cardData, label}) => {
  return cardData.map((gateItem, index) => (
    <Card key={index} >
      <h1>{label}</h1>
      <CardTop>
        <CardId>{gateItem.containerNumber}</CardId>
        <CardStatus>{gateItem.containerCondition}</CardStatus>
      </CardTop>

      <CardMiddle>{gateItem.containerLocation}</CardMiddle>

      <CardBottom>
        <CardDates>
          <p>{gateItem.gateInDate}</p>
          <p>{gateItem.dateOut}</p>
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
  ));
}

function GateInDataCard({ gateInData, gateOutData }) {
  return (
    <>
      <Container>
        <DataCard cardData={gateInData}  label={'Gate In'}/>
      </Container>

      <Container>
        <DataCard cardData={gateOutData}  label={'Gate Out'}/>
      </Container>

      {/* <Container>
        <GateOutCard gateOutData={gateOutData} label={'Gate Out'}/>
      </Container>

      <Container>
        <GateInCard gateInData={gateInData}  label={'Gate Out'}/>
      </Container> */}
    </>
  );
}

export default GateInDataCard;

{
  /* {gateOutData?.length > 0 ? (
        <Container>
          {gateOutData &&
            gateOutData?.map((outData, index) => (
              <GateOutCard key={index} outData={outData} index={index} />
            ))}
        </Container>
      ) : (
        <p>No Data</p>
      )} */
}