import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { withRangeLogic } from "@/hocs/with-range-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import type { CalendarType } from "@/types/calendar";
import { createDate, createDateFromString } from "@/utils/dateUtils";
import { splitDate } from "@/utils/inputUtils";

import { Calendar } from "../calendar/calendar";
import { Wrapper } from "./styles";

interface DatePickerProps {
  value?: string;
  maxValue?: string;
  minValue?: string;
  startFromMonday: boolean;
  isHolidaysVisible: boolean;
  isWeekendsVisible: boolean;
}

export function RangePicker({
  value,
  maxValue,
  minValue,
  startFromMonday,
  isHolidaysVisible,
  isWeekendsVisible,
}: DatePickerProps) {
  const [date, setDate] = useState(createDateFromString(value) || new Date());
  const [type, setType] = useState<CalendarType>("weeks");
  const { day, month, year } = splitDate(date);

  const [fromRange, setFromRange] = useState<Date>(
    createDateFromString(value) || new Date()
  );
  const [toRange, setToRange] = useState<Date>(
    createDateFromString(value) || new Date()
  );

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    setDate,
    type,
    setType,
    year,
    month,
    isHolidaysVisible,
    isWeekendsVisible,
    maxValue,
    minValue,
    fromRange,
    setFromRange,
    toRange,
    setToRange
  );
  const CalendarWithRange = withRangeLogic(
    CalendarWithLogic,
    date,
    setDate,
    maxValue,
    minValue,
    fromRange,
    setFromRange,
    toRange,
    setToRange
  );

  return (
    <Wrapper>
      <GlobalStyles />
      <CalendarWithRange />
    </Wrapper>
  );
}
