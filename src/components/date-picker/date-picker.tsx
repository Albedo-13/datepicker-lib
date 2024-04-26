import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
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

export function DatePicker({
  value,
  maxValue,
  minValue,
  startFromMonday,
  isHolidaysVisible,
  isWeekendsVisible,
}: DatePickerProps) {
  const [date, setDate] = useState(createDateFromString(value) || new Date());
  // TODO: опустить ниже
  // const { day, month, year } = splitDate(date);

  const [fromRange, setFromRange] = useState<Date>(
    createDateFromString(value) || new Date()
  );

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    setDate,
    // type,
    // setType,
    isHolidaysVisible,
    isWeekendsVisible,
    fromRange,
    setFromRange,
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
