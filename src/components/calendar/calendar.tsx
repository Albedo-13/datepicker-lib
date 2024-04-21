import React from "react";

import { Container } from "@/styles/style";

import CalendarBody from "../calendar-body/calendar-body";
import CalendarHead from "../calendar-head/calendar-head";

export function Calendar({
  year,
  setYear,
  month,
  setMonth,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  handleMonthChange,
  handleYearChange,
  startWeekday,
}) {
  return (
    <Container>
      <CalendarHead
        year={year}
        month={month}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
      />
      <CalendarBody
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        fromRange={fromRange}
        setFromRange={setFromRange}
        toRange={toRange}
        setToRange={setToRange}
        startWeekday={startWeekday}
      />
    </Container>
  );
}
