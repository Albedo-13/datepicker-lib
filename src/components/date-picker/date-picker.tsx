import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { Wrapper } from "@/styles/styles";
import { DatePickerProps } from "@/types/date-picker-props";
import { createDateFromString } from "@/utils";

import { Calendar } from "../calendar/calendar";

export function DatePicker({
  value,
  maxValue,
  minValue,
  startFromMonday = true,
  isHolidaysVisible = true,
  isWeekendsVisible = true,
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(
    createDateFromString(value) || new Date()
  );

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    isHolidaysVisible,
    isWeekendsVisible,
    date,
    setDate,
    maxValue,
    minValue
  );

  const CalendarWithInput = withInputLogic(
    CalendarWithLogic,
    date,
    setDate,
    maxValue,
    minValue
  );

  return (
    <Wrapper>
      <GlobalStyles />
      <CalendarWithInput />
    </Wrapper>
  );
}
