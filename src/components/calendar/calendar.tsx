import React from "react";

import { Container } from "@/styles/style";

import CalendarBody from "../calendar-body/calendar-body";
import CalendarHead from "../calendar-head/calendar-head";

export function Calendar({ year, setYear, month, setMonth, onMonthDecrement, onMonthIncrement }) {
  return (
    <Container>
      <CalendarHead
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        onMonthDecrement={onMonthDecrement}
        onMonthIncrement={onMonthIncrement}
      />
      <CalendarBody
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />
    </Container>
  );
}
