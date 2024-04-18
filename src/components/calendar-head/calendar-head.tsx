import { MONTHS } from "@/constants/constants";
import React from "react";

export default function CalendarHead({ year, setYear, month, setMonth, onMonthDecrement, onMonthIncrement }) {
  return (
    <>
      <button onClick={onMonthDecrement}>{`<-`}</button>
      {MONTHS[month - 1]} {year}
      <button onClick={onMonthIncrement}>{`->`}</button>
    </>
  );
}
