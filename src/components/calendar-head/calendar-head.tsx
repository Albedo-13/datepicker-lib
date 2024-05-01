import React from "react";

import { NextDoubleSvg } from "@/assets/next-double";
import { NextSingleSvg } from "@/assets/next-single";
import { PrevDoubleSvg } from "@/assets/prev-double";
import { PrevSingleSvg } from "@/assets/prev-single";
import { MONTHS } from "@/constants/constants";
import type { CalendarHeadType } from "@/types/calendar";

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
  handleMonthChange,
  handleYearChange,
  handleCalendarTypeChange,
}: CalendarHeadType) {
  return (
    <CalendarHeadWrapper>
      <CalendarHeadButtonWrapper>
        <CalendarHeadButton onClick={handleYearChange(-1)}>
          <PrevDoubleSvg />
        </CalendarHeadButton>
        <CalendarHeadButton
          onClick={handleMonthChange(-1)}
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
            years: `xxxx-xxxx`, // TODO: between min & max args years
          }[type]
        }
      </CalendarDate>
      <CalendarHeadButtonWrapper>
        <CalendarHeadButton
          onClick={handleMonthChange(1)}
          data-testid="next-month"
        >
          <NextSingleSvg />
        </CalendarHeadButton>
        <CalendarHeadButton onClick={handleYearChange(1)}>
          <NextDoubleSvg />
        </CalendarHeadButton>
      </CalendarHeadButtonWrapper>
    </CalendarHeadWrapper>
  );
}
