import React from "react";

import { CALENDAR_CELLS_SIZE } from "@/constants/constants";
import { CalendarBodyType } from "@/types/calendar";
import {
  getStartDateFromPreviousMonth,
  isDayBelongsToMonth,
  isWeekendOrHoliday,
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
        const outside = !isDayBelongsToMonth(date, month);
        const weekend = isWeekendOrHoliday(date);
        return (
          <Cell
            key={`${id}-${month}-${year}`}
            date={date}
            setDate={setDate}
            outside={outside}
            weekend={weekend}
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
