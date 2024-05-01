import React from "react";

import type { CalendarBodyType, CalendarHeadType } from "@/types/calendar";

import { CalendarBody } from "../calendar-body/calendar-body";
import { CalendarHead } from "../calendar-head/calendar-head";
import { CalendarContainer } from "./styles";

export function Calendar({
  year,
  month,
  type,
  setType,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  handleMonthChange,
  handleYearChange,
  handleCalendarTypeChange,
  maxValue,
  minValue,
  isHolidaysVisible,
  isWeekendsVisible,
  startWeekday,
}: CalendarHeadType & CalendarBodyType) {
  return (
    <CalendarContainer>
      <CalendarHead
        year={year}
        month={month}
        type={type}
        maxValue={maxValue}
        minValue={minValue}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        handleCalendarTypeChange={handleCalendarTypeChange}
      />
      <CalendarBody
        year={year}
        month={month}
        type={type}
        setType={setType}
        fromRange={fromRange}
        setFromRange={setFromRange}
        toRange={toRange}
        setToRange={setToRange}
        maxValue={maxValue}
        minValue={minValue}
        isHolidaysVisible={isHolidaysVisible}
        isWeekendsVisible={isWeekendsVisible}
        startWeekday={startWeekday}
      />
    </CalendarContainer>
  );
}
