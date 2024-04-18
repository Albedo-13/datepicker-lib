import React from "react";

import { Cell } from "../cell/cell";

import * as S from "./styles";
import { CALENDAR_CELLS_SIZE } from "@/constants/constants";
import { getDayFromDate, getStartDateFromPreviousMonth, nextDate } from "@/utils/dateUtils";

export default function CalendarBody({ year, setYear, month, setMonth }) {
  const startDate = getStartDateFromPreviousMonth(year, month);

  console.log("! startDate:", startDate);
  return (
    <S.CalendarBody>
      {Array.from({ length: CALENDAR_CELLS_SIZE }).map((item, id) => {
        return (
          <Cell key={`${id}-${month}-${year}`} date={nextDate(startDate, id)} />
        );
      })}
    </S.CalendarBody>
  );
}


// TODO: в хок добавить цикл до константы 35, в котором с getStartDateFromPreviousMonth
// начнем цикл, куда будем добавлять значения с getStartDateFromPreviousMonth + 1 день
// до константы 35

// TODO: функция в хок, которая будет определять data атрибут компонента Cell.
// дата атрибут будет определять стили компонента Cell.

