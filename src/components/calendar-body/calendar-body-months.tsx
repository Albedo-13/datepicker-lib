import React from "react";

import { MONTHS_SHORT } from "@/constants/constants";
import type { CalendarBodyMonthsType } from "@/types/calendar";
import { createDate, isDateBetweenMinMaxDates } from "@/utils/dateUtils";

import { Cell } from "../cell/cell";

export function CalendarBodyMonths({
  year,
  setDate,
  setType,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  maxValue,
  minValue,
}: CalendarBodyMonthsType) {
  return (
    <>
      {MONTHS_SHORT.map((monthShort, id) => {
        const date = createDate(year, id + 1, 1);
        const outside = !isDateBetweenMinMaxDates(date, minValue, maxValue);

        return (
          <Cell
            key={`${id}-${monthShort}`}
            date={date}
            setDate={setDate}
            setType={setType}
            cellValue={monthShort}
            outside={outside}
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
