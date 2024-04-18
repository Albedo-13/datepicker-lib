import React from "react";

import { withDatePickerLogic } from "@/hocs/with-date-picker-logic";
import { GlobalStyles } from "@/styles/globalStyles";

import { Calendar } from "../calendar/calendar";

export function DatePicker() {
  const DatePickerWithLogic = withDatePickerLogic(Calendar);

  return (
    <div>
      <GlobalStyles />
      <DatePickerWithLogic />
    </div>
  );
}
