import React from "react";

import { LAST_MONTH } from "@/constants/constants";

import { Cell } from "../cell/cell";

export function CalendarBodyMonths() {
  return (
    <>
      {Array.from({ length: LAST_MONTH }).map((_, id) => {
        // <Cell key={id} />;
      })}
    </>
  );
}
