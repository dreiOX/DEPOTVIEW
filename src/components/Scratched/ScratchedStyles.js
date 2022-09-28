import styled from "styled-components";

export const CardContainer = styled.div`
  background: #daf0ff;
  padding: 2em;
  border-none: none;
  border-radius: 0.5em;
  width: 100%;
  box-shadow: 1px 2px 5px 2px #aaaaaa;
  &:hover {
    box-shadow: 2px 5px 5px 2px #aaaaaa;
    transition: 0.3s ease-in;
    transform: translateX(-5px);
    // border: 1px solid #7600b6;
  }

`;

export const Heading = styled.h4`
  color: #0747a1;
  margin-bottom: 2em;
//   border-bottom: 1px solid #7600b6;
  padding-bottom: 1em;
`;
export const Paragraph = styled.p``;