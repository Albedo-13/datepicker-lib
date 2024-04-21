import React from "react";

import { NextSvg } from "@/assets/Next";
import { PrevSvg } from "@/assets/Prev";
import { MONTHS } from "@/constants/constants";

import * as S from "./styles";

// TODO: global calendar state between days | months | years (in range?)
// TODO: all default exports to named

export default function CalendarHead({
  year,
  setYear,
  month,
  setMonth,
  onMonthDecrement,
  onMonthIncrement,
}) {
  return (
    <S.CalendarHead>
      <div>
        <S.CalendarHeadButton onClick={onMonthDecrement}>
          <PrevSvg />
        </S.CalendarHeadButton>
      </div>
      <S.CalendarDate>
        {MONTHS[month - 1]} {year}
      </S.CalendarDate>
      <div>
        {/* <S.CalendarHeadButton onClick={onMonthIncrement}>
          
        </S.CalendarHeadButton> */}
        <S.CalendarHeadButton onClick={onMonthIncrement}>
          <NextSvg />
        </S.CalendarHeadButton>
      </div>
    </S.CalendarHead>
  );
}
