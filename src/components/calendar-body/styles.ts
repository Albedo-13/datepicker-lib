import { styled } from "styled-components";

import { variables as v } from "@/styles/_variables";

export const CalendarBodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`;

export const WeekdayCell = styled.div`
  padding: ${v.spacing.s10};
  width: ${v.spacing.s30};
  height: ${v.spacing.s30};
  font-weight: ${v.fontWeight.fw600};
  font-size: ${v.fontSize.fs18};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  user-drag: none;
`;
