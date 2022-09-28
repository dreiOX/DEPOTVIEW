import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ddffdd;
  padding: 2em;
  border-none: none;
  border-radius: 0.5em;
  width: 100%;
  box-shadow: 1px 2px 5px 2px #aaaaaa;
  &:hover {
    box-shadow: 1px 5px 5px 1px #aaaaaa;
    transition: 0.2s ease-in;
    transform: translateX(-5px);
    // border: 1px solid #7600b6;
`;

export const Heading = styled.h4`
  color: green;
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 1px solid green;
`;

export const Paragraph = styled.p``;
