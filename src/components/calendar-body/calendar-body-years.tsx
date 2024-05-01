import React from "react";

import { FIRST_DAY, FIRST_MONTH, MONTHS_SHORT } from "@/constants/constants";
import type { CalendarBodyMonthsType } from "@/types/calendar";
import { createDate, createDateFromString, isDateBetweenMinMaxDates } from "@/utils";
import { getYearsInRange } from "@/utils";

import { Cell } from "../cell/cell";

export function CalendarBodyYears({
  year,
  setType,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
  maxValue,
  minValue,
}: any) {
  // CalendarBodyMonthsType
  return (
    <>
    {/* TODO: Включить хаски */}
      {/* TODO: create able years array using isDateBetweenMinMaxDates, no outside needed */}
      {getYearsInRange(minValue, maxValue).map((year, id) => {
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
