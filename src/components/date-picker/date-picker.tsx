import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { createDateWithTimezoneOffsetFromString } from "@/utils/dateUtils";
import { splitDate } from "@/utils/inputUtils";

import { Calendar } from "../calendar/calendar";
import * as S from "./styles";

interface DatePickerProps {
  value: string;
  startFromMonday: boolean;
}

export function DatePicker({ value, startFromMonday }: DatePickerProps) {
  const [date, setDate] = useState(
    createDateWithTimezoneOffsetFromString(value) || new Date()
  );
  const { day, month, year } = splitDate(date);

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    setDate,
    year,
    month,
    day
  );
  const CalendarWithInput = withInputLogic(CalendarWithLogic, date, setDate);

  return (
    <S.Wrapper>
      <GlobalStyles />
      <CalendarWithInput />
    </S.Wrapper>
  );
}
