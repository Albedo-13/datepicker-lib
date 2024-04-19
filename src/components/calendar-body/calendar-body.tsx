import React from "react";

import { CALENDAR_CELLS_SIZE, WEEK_SIZE } from "@/constants/constants";
import {
  getStartDateFromPreviousMonth,
  isDatesEqual,
  isDayBelongsToMonth,
  nextDate,
} from "@/utils/dateUtils";

import { Cell } from "../cell/cell";
import * as S from "./styles";

export default function CalendarBody({
  year,
  setYear,
  month,
  setMonth,
  pickedCell,
  setPickedCell,
  startWeekday,
}) {
  const startDate = getStartDateFromPreviousMonth(
    year,
    month,
    startWeekday.calendarOffset
  );

  console.log("! startDate:", startDate);
  return (
    <S.CalendarBody>
      {startWeekday.thumbs.map((weekday, id) => {
        return (
          <S.WeekdayCell key={`${id}-${weekday}`}>{weekday}</S.WeekdayCell>
        );
      })}
      {Array.from({ length: CALENDAR_CELLS_SIZE }).map((item, id) => {
        const date = nextDate(startDate, id);
        const outside = isDayBelongsToMonth(date, month);
        const picked = isDatesEqual(date, pickedCell);
        return (
          <Cell
            key={`${id}-${month}-${year}`}
            date={date}
            outside={outside}
            picked={picked} //
            setPickedCell={setPickedCell}
          />
        );
      })}
    </S.CalendarBody>
  );
}
