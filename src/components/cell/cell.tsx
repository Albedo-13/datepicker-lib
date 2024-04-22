import React, { useState } from "react";

import { isBetweenDates, isDatesEqual } from "@/utils/dateUtils";

import * as S from "./styles";

export function Cell({
  date,
  setDate,
  outside,
  weekend,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
}) {
  const [cellDate, setCellDate] = useState(date);
  const cellDay = cellDate.getDate();
  const from = isDatesEqual(date, fromRange);
  const to = isDatesEqual(date, toRange);

  const handleMouseDownClick = () => {
    if (!outside) {
      setDate(cellDate);
      setToRange(cellDate);
      setFromRange(cellDate);
    }
  };

  const handleOtherClick = () => {
    setToRange(cellDate);
  };

  return (
    <S.Cell
      onMouseDown={handleMouseDownClick}
      onMouseUp={handleOtherClick}
      data-outside={outside}
      data-weekend={weekend}
      data-from={from}
      data-to={to}
      data-between={isBetweenDates(date, fromRange, toRange)}
    >
      {cellDay}
    </S.Cell>
  );
}
