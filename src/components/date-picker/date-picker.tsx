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
  const [type, setType] = useState<CalendarType>("weeks");
  const { day, month, year } = splitDate(date);

  // TODO: 2) можно убрать свойства и сделать их опциональными. Проверять
  const [fromRange, setFromRange] = useState<Date>(
    createDate(year, month, day)
  );
  const [toRange, setToRange] = useState<Date>(createDate(year, month, day));

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
  // TODO: 1) date === fromRange. Использовать date в календаре, 
  // опциональные параметры в rangepicker. Используется только в Cell
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
