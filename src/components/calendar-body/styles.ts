import { styled } from "styled-components";

import { variables } from "@/styles/_variables";

export const WeekdayCell = styled.div`
  padding: ${variables.spacing.s10};
  width: ${variables.spacing.s30};
  height: ${variables.spacing.s30};
  font-weight: ${variables.fontWeight.fw600};
  font-size: ${variables.fontSize.fs18};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  user-drag: none;
`;

export const CalendarBodyWeeksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`;

export const CalendarBodyMonthsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4));
  justify-items: center;
`;
