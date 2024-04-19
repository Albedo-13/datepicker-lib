import { styled } from "styled-components";

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`;

const WeekdayCell = styled.div`
  padding: 20px 10px 10px;
  width: 30px;
  height: 30px;
  font-weight: 600;
  font-size: 13px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  // TODO: unselectable text
`;

export { CalendarBody, WeekdayCell };
