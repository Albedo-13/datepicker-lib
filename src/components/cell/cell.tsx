import React, { useState } from "react";

import { isBetweenDates, isDatesEqual } from "@/utils/dateUtils";

import * as S from "./styles";

export function Cell({
  date,
  outside,
  weekend,
  fromRange,
  setFromRange,
  toRange,
  setToRange,
}) {
  // TODO: basic variable?
  // TODO: hoist data to hoc
  // TODO: "to" state to range picker?
  // TODO: rename from and to => pickedDate and rangeToDate?
  const [cellDate, setCellDate] = useState(date);
  const day = cellDate.getDate();
  const from = isDatesEqual(date, fromRange);
  const to = isDatesEqual(date, toRange);

  const handleMouseDownClick = () => {
    setToRange(cellDate);
    setFromRange(cellDate);
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
      {day}
    </S.Cell>
  );
}
