import React from "react";

import CalendarBody from "../calendar-body/calendar-body";
import CalendarHead from "../calendar-head/calendar-head";
import * as S from "./styles";

export function Calendar({
  year,
  month,
  setDate,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  handleMonthChange,
  handleYearChange,
  startWeekday,
}) {
  return (
    <S.CalendarContainer>
      <CalendarHead
        year={year}
        month={month}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
      />
      <CalendarBody
        year={year}
        month={month}
        setDate={setDate}
        fromRange={fromRange}
        setFromRange={setFromRange}
        toRange={toRange}
        setToRange={setToRange}
        startWeekday={startWeekday}
      />
    </S.CalendarContainer>
  );
}
