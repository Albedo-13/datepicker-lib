import React from "react";

import { NextDoubleSvg } from "@/assets/next-double";
import { NextSingleSvg } from "@/assets/next-single";
import { PrevDoubleSvg } from "@/assets/prev-double";
import { PrevSingleSvg } from "@/assets/prev-single";
import { MONTHS } from "@/constants/constants";
import { CalendarHeadType } from "@/types/calendar";

import {
  CalendarDate,
  CalendarHeadButton,
  CalendarHeadButtonWrapper,
  CalendarHeadWrapper,
} from "./styles";

export function CalendarHead({
  year,
  month,
  handleMonthChange,
  handleYearChange,
}: CalendarHeadType) {
  return (
    <CalendarHeadWrapper>
      <CalendarHeadButtonWrapper>
        <CalendarHeadButton onClick={handleYearChange(-1)}>
          <PrevDoubleSvg />
        </CalendarHeadButton>
        <CalendarHeadButton onClick={handleMonthChange(-1)}>
          <PrevSingleSvg />
        </CalendarHeadButton>
      </CalendarHeadButtonWrapper>
      <CalendarDate>
        {MONTHS[month - 1]} {year}
      </CalendarDate>
      <CalendarHeadButtonWrapper>
        <CalendarHeadButton onClick={handleMonthChange(1)}>
          <NextSingleSvg />
        </CalendarHeadButton>
        <CalendarHeadButton onClick={handleYearChange(1)}>
          <NextDoubleSvg />
        </CalendarHeadButton>
      </CalendarHeadButtonWrapper>
    </CalendarHeadWrapper>
  );
}
