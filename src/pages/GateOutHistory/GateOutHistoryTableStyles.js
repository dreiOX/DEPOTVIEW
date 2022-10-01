import styled from "styled-components";

export const Container = styled.div`
  margin-left: 22%;
  margin-top: 2em;
`;

export const Heading = styled.div`
  padding: 1.2em 0em;
  background: white;
  width: 10em;
  text-align: center;
  border: 1px solid black;
`;
export const HeadingTop = styled.div`
  padding: 2em;
  margin-left: 20%;
  font-weight: bold;
  &:hover {
    color: green;
  }
`;
export const TopRow = styled.tr`
  margin-bottom: 1em;
  display: flex;
  border: 1px solid black;
`;

export const BottomRow = styled.div`
  border: 1px solid black;
  display: flex;
`;

export const Data = styled.div`
  padding: 1em 0em;
  text-align: center;
  background-color: white;
  width: 10em;
  height: 3em;
  // margin: auto;
  border-right: 1px solid black;
  &:hover {
    color: green;
  }
`;
