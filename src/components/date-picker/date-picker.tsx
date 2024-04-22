import React from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { GlobalStyles } from "@/styles/globalStyles";

import { Calendar } from "../calendar/calendar";
import * as S from "./styles";

interface DatePickerProps {
  value: string;
  startFromMonday: boolean;
}

export function DatePicker({ startFromMonday }: DatePickerProps) {
  const CalendarWithLogic = withCalendarLogic(Calendar, startFromMonday);
  const CalendarWithInput = withInputLogic(CalendarWithLogic);
  
  return (
    <S.Wrapper>
      <GlobalStyles />
      <CalendarWithInput />
    </S.Wrapper>
  );
}
