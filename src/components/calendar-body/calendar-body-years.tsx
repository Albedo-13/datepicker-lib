import React from "react";

import { FIRST_DAY, FIRST_MONTH } from "@/constants/constants";
import type { CalendarBodyYearsType } from "@/types/calendar";
import {
  createDate,
  isDateBetweenMinMaxDates,
} from "@/utils";
import { getYearsInRange } from "@/utils";

import { Cell } from "../cell/cell";

export function CalendarBodyYears({
  setType,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  maxValue,
  minValue,
}: CalendarBodyYearsType) {
  return (
    <>
      {getYearsInRange(minValue as string, maxValue as string).map((year, id) => {
        const date = createDate(year, FIRST_MONTH, FIRST_DAY);
        const outside = !isDateBetweenMinMaxDates(date, minValue, maxValue);

        return (
          <Cell
            key={`${id}-${year}`}
            date={date}
            setType={setType}
            cellValue={year}
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
