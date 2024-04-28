import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withRangeLogic } from "@/hocs/with-range-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { createDateFromString } from "@/utils";

import { Calendar } from "../calendar/calendar";
import { Wrapper } from "./styles";

interface DatePickerProps {
  value?: string;
  maxValue?: string;
  minValue?: string;
  startFromMonday?: boolean;
  isHolidaysVisible?: boolean;
  isWeekendsVisible?: boolean;
}

export function RangePicker({
  value,
  maxValue,
  minValue,
  startFromMonday = true,
  isHolidaysVisible = true,
  isWeekendsVisible = true,
}: DatePickerProps) {
  const [fromRange, setFromRange] = useState<Date>(
    createDateFromString(value) || new Date()
  );
  const [toRange, setToRange] = useState<Date>(
    createDateFromString(value) || new Date()
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
