import React, { useState } from "react";

import * as S from "./styles";

export function Cell({ date }) {
  const [cellDate, setCellDate] = useState(date);
  const day = cellDate.getDate();

  const handleClick = () => {
    console.log("click", cellDate);
  }

  return <S.Cell onClick={handleClick}>{day}</S.Cell>;
}
