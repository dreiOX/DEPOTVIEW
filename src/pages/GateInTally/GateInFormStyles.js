import styled from "styled-components";

export const Container = styled.div`
  margin-left: 22%;
  width: 40%;
`;
export const Card = styled.div`
  padding: 2em;
`;

export const Form = styled.form`
  width: 100%;
`;
export const Label = styled.label`
  float: left;
  width: 30%;
  padding: 0.5em 0.5em 0.5em 0;
`;
export const Input = styled.input`
  padding: 1em;
  float: left;
  width: 70%;
  border: 1px solid black;
  border-radius: 0.2em;
`;
export const Heading = styled.div`
  padding: 2em;
  font-weight: bold;
  &:hover {
    color: green;
  }
`;
export const Select = styled.select`
  padding: 1em;
  float: left;
  width: 70%;
  border: 1px solid black;
  border-radius: 0.2em;
`;
export const Button = styled.button`
  padding: 1em;
  background: green;
  border: none;
  border-radius: 0.5em;
  color: white;
  width: 20%;
  cursor: pointer;
  &:hover {
    background: black;
    transition: 0.2s ease-in;
  }
`;
