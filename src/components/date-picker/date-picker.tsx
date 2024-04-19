import React from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { GlobalStyles } from "@/styles/globalStyles";

import { Calendar } from "../calendar/calendar";

interface DatePickerProps {
  startFromMonday: boolean,
}

export function DatePicker({
  startFromMonday
}: DatePickerProps) {
  const CalendarWithLogic = withCalendarLogic(Calendar, startFromMonday);
  // TODO: calendar input logic
  // TODO: календарь - абсолют. Родитель всех(?) - релатив.
  // TODO: инпут - отдельный хок.
  // TODO: маска валидации инпута
  

  // 1 TODO: сначала закончить календарь (диапазон, смена месяца, стили)
  // 2 TODO: сверстать самостоятельный инпут + новый хок для него
  // 3 TODO: общее состояние между хоками, текст в инпуте меняет календарь
  // 4 TODO: сделать инпут с маской валидации
  // 5 TODO: показать/скрыть календарь по клику на иконку инпута

  return (
    <div>
      <GlobalStyles />
      <CalendarWithLogic />
    </div>
  );
}
