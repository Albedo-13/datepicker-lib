import React from "react";

//@ts-expect-error Typescript cant recognize svg files
import arrowNext from "@/assets/Next.svg";
//@ts-expect-error Typescript cant recognize svg files
import arrowPrev from "@/assets/Prev.svg";
import { MONTHS } from "@/constants/constants";

import * as S from "./styles";

// !TODO: svgs to components
// TODO: global calendar state between days | months | years (in range?)

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
      <S.CalendarHeadButton onClick={onMonthDecrement}>
        <img src={arrowPrev} alt="arrow left previous month" />
      </S.CalendarHeadButton>
      <S.CalendarDate onClick={() => {}}>
        {MONTHS[month - 1]} {year}
      </S.CalendarDate>
      <S.CalendarHeadButton onClick={onMonthIncrement}>
        <img src={arrowNext} alt="arrow right next month" />
      </S.CalendarHeadButton>
    </S.CalendarHead>
  );
}
