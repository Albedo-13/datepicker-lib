import React, { useState } from "react";

import * as S from "./styles";

export function Cell({ date, outside }) {
  const [cellDate, setCellDate] = useState(date);
  const day = cellDate.getDate();

  const handleClick = () => {
    console.log("click", cellDate);
    console.log();
  };

  return (
    <S.Cell onClick={handleClick} data-outside={outside}>
      {day}
    </S.Cell>
  );
}
