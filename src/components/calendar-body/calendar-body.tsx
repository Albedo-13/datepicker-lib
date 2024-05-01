import React from "react";

import type { CalendarBodyType } from "@/types/calendar";

import { CalendarBodyMonths } from "./calendar-body-months";
import { CalendarBodyWeeks } from "./calendar-body-weeks";
import { CalendarBodyYears } from "./calendar-body-years";
import { CalendarBodyMonthsWrapper, CalendarBodyWeeksWrapper, CalendarBodyYearsWrapper } from "./styles";

export function CalendarBody({
  year,
  month,
  startWeekday,
  setFromRange,
  type,
  setType,
  fromRange,
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
      {type === "years" && (
        <CalendarBodyYearsWrapper>
          <CalendarBodyYears
            setType={setType}
            fromRange={fromRange}
            setFromRange={setFromRange}
            toRange={toRange}
            setToRange={setToRange}
            maxValue={maxValue}
            minValue={minValue}
          />
        </CalendarBodyYearsWrapper>
      )}
    </>
  );
}
