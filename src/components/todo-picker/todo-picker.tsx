import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { withTodoLogic } from "@/hocs/with-todo-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { Wrapper } from "@/styles/styles";
import { DatePickerProps } from "@/types/date-picker-props";
import { createDateFromString, createDateNow } from "@/utils";

import { Calendar } from "../calendar/calendar";

export function TodoPicker({
  value,
  maxValue,
  minValue,
  startFromMonday = true,
  isHolidaysVisible = true,
  isWeekendsVisible = true,
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(
    createDateFromString(value) || createDateNow()
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

  const CalendarWithTodo = withTodoLogic(
    CalendarWithInput,
    date
  );

  return (
    <Wrapper>
      <GlobalStyles />
      <CalendarWithTodo />
    </Wrapper>
  );
}
