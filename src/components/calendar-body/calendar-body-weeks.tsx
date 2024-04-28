import React from "react";

import { CALENDAR_CELLS_SIZE } from "@/constants/constants";
import type { CalendarBodyWeeksType } from "@/types/calendar";
import {
  getStartDateFromPreviousMonth,
  isDateBetweenMinMaxDates,
  isDayBelongsToMonth,
  isHoliday,
  isWeekend,
  nextDate,
} from "@/utils";

import { Cell } from "../cell/cell";
import { WeekdayCell } from "./styles";

export function CalendarBodyWeeks({
  year,
  month,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  maxValue,
  minValue,
  isHolidaysVisible,
  isWeekendsVisible,
  startWeekday,
}: CalendarBodyWeeksType) {
  const startDate = getStartDateFromPreviousMonth(
    year,
    month,
    startWeekday.calendarOffset
  );

  return (
    <>
      {startWeekday.thumbs.map((weekday, id) => {
        return <WeekdayCell key={`${id}-${weekday}`}>{weekday}</WeekdayCell>;
      })}
      {Array.from({ length: CALENDAR_CELLS_SIZE }).map((_, id) => {
        const date = nextDate(startDate, id);
        const cellValue = date.getDate();
        const outside =
          !isDayBelongsToMonth(date, month) ||
          !isDateBetweenMinMaxDates(date, minValue, maxValue);
        const weekend = isWeekend(date) && isWeekendsVisible;
        const holiday =
          isHoliday(date.getMonth() + 1, date.getDate()) && isHolidaysVisible;

        return (
          <Cell
            key={`${id}-${month}-${year}`}
            date={date}
            cellValue={cellValue}
            outside={outside}
            weekend={weekend}
            holiday={holiday}
            fromRange={fromRange}
            setFromRange={setFromRange}
            toRange={toRange}
            setToRange={setToRange}
          />
        );
      })}
    </>
  );
}
