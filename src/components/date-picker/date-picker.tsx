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
  startFromMonday?: boolean;
  isHolidaysVisible?: boolean;
  isWeekendsVisible?: boolean;
}

export function DatePicker({
  value,
  maxValue,
  minValue,
  startFromMonday = true,
  isHolidaysVisible = true,
  isWeekendsVisible = true,
}: DatePickerProps) {
  // TODO: rename const [date, setDate] = useState(createDateFromString(value) || new Date());
  const [fromRange, setFromRange] = useState<Date>(
    createDateFromString(value) || new Date()
  );

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    startFromMonday,
    setFromRange,
    isHolidaysVisible,
    isWeekendsVisible,
    fromRange,
    maxValue,
    minValue
  );

  // TODO: double setFromRange
  const CalendarWithInput = withInputLogic(
    CalendarWithLogic,
    fromRange,
    setFromRange,
    setFromRange,
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
