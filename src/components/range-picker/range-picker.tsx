import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withRangeLogic } from "@/hocs/with-range-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { Wrapper } from "@/styles/styles";
import { DatePickerProps } from "@/types/date-picker-props";
import { createDateFromString, createDateNow } from "@/utils";

import { Calendar } from "../calendar/calendar";

export function RangePicker({
  value,
  maxValue,
  minValue,
  startFromMonday = true,
  isHolidaysVisible = true,
  isWeekendsVisible = true,
}: DatePickerProps) {
  const [fromRange, setFromRange] = useState<Date>(
    createDateFromString(value) || createDateNow()
  );
  const [toRange, setToRange] = useState<Date>(
    createDateFromString(value) || createDateNow()
  );

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    isHolidaysVisible,
    isWeekendsVisible,
    fromRange,
    setFromRange,
    maxValue,
    minValue,
    toRange,
    setToRange
  );

  const CalendarWithRange = withRangeLogic(
    CalendarWithLogic,
    fromRange,
    setFromRange,
    toRange,
    setToRange,
    maxValue,
    minValue
  );

  return (
    <Wrapper>
      <GlobalStyles />
      <CalendarWithRange />
    </Wrapper>
  );
}
