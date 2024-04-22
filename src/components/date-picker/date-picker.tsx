import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { splitDate } from "@/utils/inputUtils";

import { Calendar } from "../calendar/calendar";
import * as S from "./styles";

interface DatePickerProps {
  value: string;
  startFromMonday: boolean;
}

export function DatePicker({ startFromMonday }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const { day, month, year } = splitDate(date);

  console.log("DatePicker date (public):", date);

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    setDate,
    year,
    month,
    day
  );
  const CalendarWithInput = withInputLogic(CalendarWithLogic);

  return (
    <S.Wrapper>
      <GlobalStyles />
      <CalendarWithInput />
    </S.Wrapper>
  );
}
