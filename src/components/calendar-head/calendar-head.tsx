import React from "react";

import { NextDoubleSvg } from "@/assets/next-double";
import { NextSingleSvg } from "@/assets/next-single";
import { PrevDoubleSvg } from "@/assets/prev-double";
import { PrevSingleSvg } from "@/assets/prev-single";
import { MONTHS } from "@/constants/constants";
import type { CalendarHeadType } from "@/types/calendar";
import { getYearsInRange } from "@/utils";

import {
  CalendarDate,
  CalendarHeadButton,
  CalendarHeadButtonWrapper,
  CalendarHeadWrapper,
} from "./styles";

export function CalendarHead({
  year,
  month,
  type,
  maxValue,
  minValue,
  handleMonthChange,
  handleYearChange,
  handleCalendarTypeChange,
}: CalendarHeadType) {
  const rangedYears = getYearsInRange(minValue as string, maxValue as string);
  const [minYear, maxYear] = [rangedYears[0], rangedYears.at(-1)];
  
  const isCalendarMonthButtonsVisible = type === "weeks";
  const isCalendarYearButtonsVisible = type !== "years";

  return (
    <CalendarHeadWrapper>
      <CalendarHeadButtonWrapper>
        <CalendarHeadButton
          onClick={handleYearChange(-1)}
          data-visible={isCalendarYearButtonsVisible}
        >
          <PrevDoubleSvg />
        </CalendarHeadButton>
        <CalendarHeadButton
          onClick={handleMonthChange(-1)}
          data-visible={isCalendarMonthButtonsVisible}
          data-testid="prev-month"
        >
          <PrevSingleSvg />
        </CalendarHeadButton>
      </CalendarHeadButtonWrapper>
      <CalendarDate
        onClick={handleCalendarTypeChange}
        data-testid="calendar-type"
      >
        {
          {
            weeks: `${MONTHS[month - 1]} ${year}`,
            months: `${year}`,
            years: `${minYear}-${maxYear}`,
          }[type]
        }
      </CalendarDate>
      <CalendarHeadButtonWrapper>
        <CalendarHeadButton
          onClick={handleMonthChange(1)}
          data-visible={isCalendarMonthButtonsVisible}
          data-testid="next-month"
        >
          <NextSingleSvg />
        </CalendarHeadButton>
        <CalendarHeadButton
          onClick={handleYearChange(1)}
          data-visible={isCalendarYearButtonsVisible}
        >
          <NextDoubleSvg />
        </CalendarHeadButton>
      </CalendarHeadButtonWrapper>
    </CalendarHeadWrapper>
  );
}
