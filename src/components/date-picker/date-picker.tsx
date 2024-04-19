import React from "react";

import { withDatePickerLogic } from "@/hocs/with-date-picker-logic";
import { GlobalStyles } from "@/styles/globalStyles";

import { Calendar } from "../calendar/calendar";

interface DatePickerProps {
  startFromMonday: boolean,
}

export function DatePicker({
  startFromMonday
}: DatePickerProps) {
  const DatePickerWithLogic = withDatePickerLogic(Calendar, startFromMonday);

  return (
    <div>
      <GlobalStyles />
      <DatePickerWithLogic />
    </div>
  );
}
