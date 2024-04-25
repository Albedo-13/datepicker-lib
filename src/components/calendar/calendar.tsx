import React from "react";

import type { CalendarBodyType, CalendarHeadType } from "@/types/calendar";

import { CalendarBody } from "../calendar-body/calendar-body";
import { CalendarHead } from "../calendar-head/calendar-head";
import { CalendarContainer } from "./styles";

export function Calendar({
  year,
  month,
  setDate,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  handleMonthChange,
  handleYearChange,
  maxValue,
  minValue,
  startWeekday,
}: CalendarHeadType & CalendarBodyType) {
  return (
    <CalendarContainer>
      <CalendarHead
        year={year}
        month={month}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
      />
      <CalendarBody
        year={year}
        month={month}
        setDate={setDate}
        fromRange={fromRange}
        setFromRange={setFromRange}
        toRange={toRange}
        setToRange={setToRange}
        maxValue={maxValue}
        minValue={minValue}
        startWeekday={startWeekday}
      />
    </CalendarContainer>
  );
}
