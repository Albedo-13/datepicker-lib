import React from "react";

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
  const cellDay = date.getDate();
  const from = isDatesEqual(date, fromRange);
  const to = isDatesEqual(date, toRange);

  const handleMouseDownClick = () => {
    if (!outside) {
      setDate(date);
      setToRange(date);
      setFromRange(date);
    }
  };

  const handleOtherClick = () => {
    setToRange(date);
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
