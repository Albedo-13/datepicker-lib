import { styled } from "styled-components";

const CalendarBody = styled.div`
  background-color: yellow;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`;

export { CalendarBody };
