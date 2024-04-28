import React from "react";

import { CalendarCellType } from "@/types/calendar";
import { isBetweenDates, isDatesEqual } from "@/utils";

import { CellStyled } from "./styles";

export function Cell({
  date,
  setType,
  cellValue,
  outside,
  weekend,
  holiday,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
}: CalendarCellType) {
  const from = isDatesEqual(date, fromRange as Date);
  const to = isDatesEqual(date, toRange as Date);

  const handleMouseDownClick = () => {
    if (!outside) {
      setFromRange(date);
      setToRange?.(date)
    }
  };

  const handleMouseUpClick = () => {
    if (!outside) {
      setToRange?.(date)
      setType ? setType("weeks") : null;
    }
  };

  return (
    <CellStyled
      onMouseDown={handleMouseDownClick}
      onMouseUp={handleMouseUpClick}
      data-outside={outside}
      data-weekend={weekend}
      data-holiday={holiday}
      data-from={from}
      data-to={to}
      data-between={isBetweenDates(date, fromRange, toRange)}
    >
      {cellValue}
    </CellStyled>
  );
}
