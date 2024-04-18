import React from "react";

import { CALENDAR_CELLS_SIZE } from "@/constants/constants";
import { getDayFromDate, getStartDateFromPreviousMonth, isDayBelongsToMonth, nextDate } from "@/utils/dateUtils";

import { Cell } from "../cell/cell";
import * as S from "./styles";

export default function CalendarBody({ year, setYear, month, setMonth }) {
  const startDate = getStartDateFromPreviousMonth(year, month);

  console.log("! startDate:", startDate);
  return (
    <S.CalendarBody>
      {Array.from({ length: CALENDAR_CELLS_SIZE }).map((item, id) => {
        const date = nextDate(startDate, id);
        const outside = isDayBelongsToMonth(date, month);
        return (
          <Cell 
            key={`${id}-${month}-${year}`} 
            date={date} 
            data-outside={outside} 
          />
        );
      })}
    </S.CalendarBody>
  );
}

// TODO: функция в хок, которая будет определять data атрибут компонента Cell.
// дата атрибут будет определять стили компонента Cell.
