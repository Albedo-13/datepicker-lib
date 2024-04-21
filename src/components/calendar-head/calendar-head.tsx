import React from "react";

import { NextDoubleSvg } from "@/assets/next-double";
import { NextSingleSvg } from "@/assets/next-single";
import { PrevDoubleSvg } from "@/assets/prev-double";
import { PrevSingleSvg } from "@/assets/prev-single";
import { MONTHS } from "@/constants/constants";

import * as S from "./styles";

export default function CalendarHead({
  year,
  month,
  handleMonthChange,
  handleYearChange,
}) {
  return (
    <S.CalendarHead>
      <S.CalendarHeadButtonWrapper>
        <S.CalendarHeadButton onClick={handleYearChange(-1)}>
          <PrevDoubleSvg />
        </S.CalendarHeadButton>
        <S.CalendarHeadButton onClick={handleMonthChange(-1)}>
          <PrevSingleSvg />
        </S.CalendarHeadButton>
      </S.CalendarHeadButtonWrapper>
      <S.CalendarDate>
        {MONTHS[month - 1]} {year}
      </S.CalendarDate>
      <S.CalendarHeadButtonWrapper>
        <S.CalendarHeadButton onClick={handleMonthChange(1)}>
          <NextSingleSvg />
        </S.CalendarHeadButton>
        <S.CalendarHeadButton onClick={handleYearChange(1)}>
          <NextDoubleSvg />
        </S.CalendarHeadButton>
      </S.CalendarHeadButtonWrapper>
    </S.CalendarHead>
  );
}
