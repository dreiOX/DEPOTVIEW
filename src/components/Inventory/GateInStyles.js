import styled from "styled-components";

export const Top = styled.div`
  margin-left: 20%;
  // padding-bottom: 1em;
  width: 30%;
`;
export const Select = styled.select`
  width: 17%;
  border: none;
  border-radius: 0.5em;
  padding: 0.75em;
  margin-bottom: 0.75em;
`;

export const Cover = styled.div`
  display: flex;
  width: 60%;
  margin-left: 20%;
  gap: 1em;
`;

export const Heading = styled.div`
  margin: auto;
  font-weight: bold;
  font-size: 1em;
  width: 40%;
  padding: 1em;
  // background: blue;
`;

export const Container = styled.div`
  width: 100%;
  // overflow-y: scroll;
  // height: 100vh;
`;
export const Card = styled.div`
  background: #fff;
  border-radius: 0.5em;
  width: 100%;
  height: 10em;
  padding: 1em;
  margin: 0.5em 1em;
  border-left: 0.2em solid
    ${(props) => (props.cardColor ? "#06c258" : "#ffb347")};
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const CardId = styled.div`
  margin: 0 15px;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;
export const CardStatus = styled.div`
  background: ${(props) => (props.cardColor ? "#06c258" : "#ffb347")};
  padding: 4px 10px;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  margin: auto 15px auto;
`;

export const CardMiddle = styled.div`
  font-weight: bold;
  margin: 0 15px;
  color: #777777;
`;
export const CardDates = styled.div`
  color: #777777;
  font-weight: bold;
`;

export const CardBottom = styled.div`
  font-size: 14px;
  margin: 0 15px 15px 15px;
  display: flex;
  float: left;
`;

export const CardIcon = styled.div`
  font-size: 30px;
  margin: auto 0;
`;
