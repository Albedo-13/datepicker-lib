import React, { useState } from "react";

import * as S from "./styles";

export function Cell({ date, outside, picked, setPickedCell }) {
  // TODO: basic variable?
  const [cellDate, setCellDate] = useState(date);
  const day = cellDate.getDate();

  const handleClick = () => {
    console.log("click", cellDate);
    setPickedCell(cellDate);
  };

  return (
    <S.Cell onClick={handleClick} data-outside={outside} data-picked={picked}>
      {day}
    </S.Cell>
  );
}
