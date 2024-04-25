import React from "react";

import type { CalendarBodyType } from "@/types/calendar";

import { CalendarBodyMonths } from "./calendar-body-months";
import { CalendarBodyWeeks } from "./calendar-body-weeks";
import { CalendarBodyWrapper } from "./styles";

export function CalendarBody({
  year,
  month,
  type,
  setDate,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  maxValue,
  minValue,
  isHolidaysVisible,
  isWeekendsVisible,
  startWeekday,
}: CalendarBodyType) {
  return (
    <CalendarBodyWrapper>
      {type === "weeks" && (
        <CalendarBodyWeeks
          year={year}
          month={month}
          startWeekday={startWeekday}
          setDate={setDate}
          fromRange={fromRange}
          setFromRange={setFromRange}
          toRange={toRange}
          setToRange={setToRange}
          maxValue={maxValue}
          minValue={minValue}
          isHolidaysVisible={isHolidaysVisible}
          isWeekendsVisible={isWeekendsVisible}
        />
      )}
      {type === "months" && (
        <CalendarBodyMonths
          
        />
      )}
    </CalendarBodyWrapper>
  );
}
