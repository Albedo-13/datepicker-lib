import React from "react";

import { CALENDAR_CELLS_SIZE } from "@/constants/constants";
import { CalendarBodyType } from "@/types/calendar";
import {
  getStartDateFromPreviousMonth,
  isDateBetweenMinMaxDates,
  isDayBelongsToMonth,
  isHoliday,
  isWeekend,
  nextDate,
} from "@/utils/dateUtils";

import { Cell } from "../cell/cell";
import { CalendarBodyWrapper, WeekdayCell } from "./styles";

export function CalendarBody({
  year,
  month,
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
  const startDate = getStartDateFromPreviousMonth(
    year,
    month,
    startWeekday.calendarOffset
  );

  return (
    <CalendarBodyWrapper>
      {startWeekday.thumbs.map((weekday, id) => {
        return (
          <WeekdayCell key={`${id}-${weekday}`}>
            {weekday}
          </WeekdayCell>
        );
      })}
      {Array.from({ length: CALENDAR_CELLS_SIZE }).map((_, id) => {
        const date = nextDate(startDate, id);
        const outside = !isDayBelongsToMonth(date, month) || !isDateBetweenMinMaxDates(date, minValue, maxValue);
        const weekend = isWeekend(date) && isWeekendsVisible;
        const holiday = isHoliday(date.getMonth() + 1, date.getDate()) && isHolidaysVisible;

        return (
          <Cell
            key={`${id}-${month}-${year}`}
            date={date}
            setDate={setDate}
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
    </CalendarBodyWrapper>
  );
}
