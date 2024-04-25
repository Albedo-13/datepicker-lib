import React from "react";

import { CalendarCellType } from "@/types/calendar";
import { isBetweenDates, isDatesEqual } from "@/utils/dateUtils";

import { CellStyled } from "./styles";

export function Cell({
  date,
  setDate,
  outside,
  weekend,
  holiday,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
}: CalendarCellType) {
  const cellDay = date.getDate();
  const from = isDatesEqual(date, fromRange as Date);
  const to = isDatesEqual(date, toRange as Date);

  const handleMouseDownClick = () => {
    if (!outside) {
      setDate(date);
      setToRange(date);
      setFromRange(date);
    }
  };

  const handleOtherClick = () => {
    if (!outside) {
      setToRange(date);
    }
  };

  return (
    <CellStyled
      onMouseDown={handleMouseDownClick}
      onMouseUp={handleOtherClick}
      data-outside={outside}
      data-weekend={weekend}
      data-holiday={holiday}
      data-from={from}
      data-to={to}
      data-between={isBetweenDates(date, fromRange, toRange)}
    >
      {cellDay}
    </CellStyled>
  );
}
