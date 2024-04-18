import { MONTHS } from "@/constants/constants";
import React from "react";

export default function CalendarHead({ year, setYear, month, setMonth }) {
  return (
    <>
      <button onClick={() => setMonth(() => month - 1)}>{`<-`}</button>
      {MONTHS[month - 1]} {year}
      <button onClick={() => setMonth(() => month + 1)}>{`->`}</button>
    </>
  );
}
