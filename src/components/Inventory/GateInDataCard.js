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
  Cover,
} from "./GateInStyles";
import { AiOutlineMore } from "react-icons/ai";

// const GateInCard = ({ gateInData }) => {
//   return gateInData.map((gateItem, index) => (
//     <Card key={index}>
//       <CardTop>
//         <CardId>{gateItem.containerNumber}</CardId>
//         <CardStatus>{gateItem.containerCondition}</CardStatus>
//       </CardTop>

//       <CardMiddle>{gateItem.containerLocation}</CardMiddle>

//       <CardBottom>
//         <CardDates>
//           <p>{gateItem.gateInDate}</p>
//           <p>{gateItem.dateOut}</p>
//         </CardDates>
//         <CardIcon>
//           <AiOutlineMore />
//         </CardIcon>
//         <div>
//           <p>{gateItem.truckNumber}</p>
//           <p>{gateItem.containerStatus}</p>
//         </div>
//       </CardBottom>
//     </Card>
//   ));
// };

// const GateOutCard = ({ gateOutData }) => {
//   return gateOutData.map((gateOutItems, index) => (
//     <Card key={index}>
//       <CardTop>
//         <CardId>{gateOutItems.containerNumber}</CardId>
//         <CardStatus>{gateOutItems.containerCondition}</CardStatus>
//       </CardTop>

//       <CardMiddle>{gateOutItems.containerStatus}</CardMiddle>

//       <CardBottom>
//         <CardDates>
//           <p>{gateOutItems.dateOut}</p>
//         </CardDates>
//         <CardIcon>
//           <AiOutlineMore />
//         </CardIcon>
//         <div>
//           <p>{gateOutItems.truckNumber}</p>
//           <p>{gateOutItems.containerStatus}</p>
//         </div>
//       </CardBottom>
//     </Card>
//   ));
// };

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
            <p>{gateItem.gateInDate}</p>
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
        <h2>Gate In</h2>
        <DataCard cardData={gateInData} label={"Gate In"} cardColor={true} />
      </Container>

      <Container>
        <h2>Gate Out</h2>
        <DataCard cardData={gateOutData} label={"Gate Out"} />
      </Container>

      {/* <Container>
        <GateOutCard gateOutData={gateOutData} label={'Gate Out'}/>
      </Container>

      <Container>
        <GateInCard gateInData={gateInData}  label={'Gate Out'}/>
      </Container> */}
    </Cover>
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
