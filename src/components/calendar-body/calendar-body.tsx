import React from "react";

import type { CalendarBodyType } from "@/types/calendar";

import { CalendarBodyMonths } from "./calendar-body-months";
import { CalendarBodyWeeks } from "./calendar-body-weeks";
import { CalendarBodyMonthsWrapper, CalendarBodyWeeksWrapper } from "./styles";

export function CalendarBody({
  year,
  month,
  startWeekday,
  setDate,
  type,
  setType,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  maxValue,
  minValue,
  isHolidaysVisible,
  isWeekendsVisible,
}: CalendarBodyType) {
  return (
    <>
      {type === "weeks" && (
        <CalendarBodyWeeksWrapper>
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
        </CalendarBodyWeeksWrapper>
      )}
      {type === "months" && (
        <CalendarBodyMonthsWrapper>
          <CalendarBodyMonths
            year={year}
            setDate={setDate}
            setType={setType}
            fromRange={fromRange}
            setFromRange={setFromRange}
            toRange={toRange}
            setToRange={setToRange}
            maxValue={maxValue}
            minValue={minValue}
          />
        </CalendarBodyMonthsWrapper>
      )}
    </>
  );
}
