import React, { useState } from "react";

import { FIRST_MONTH, LAST_MONTH, WEEKDAYS } from "@/constants/constants";
import { WeekdaysItemType } from "@/types/types";
import { createDateWithTimezoneOffset } from "@/utils/dateUtils";

export function withCalendarLogic(
  Component,
  startFromMonday,
  setDate,
  yearProp,
  monthProp,
  dayProp
) {
  return function calendarLogic() {
    const [year, setYear] = useState(yearProp);
    const [month, setMonth] = useState(monthProp);

    const [fromRange, setFromRange] = useState(
      createDateWithTimezoneOffset(year, month, dayProp)
    );
    const [toRange, setToRange] = useState(null);

    const startWeekday: WeekdaysItemType = startFromMonday
      ? WEEKDAYS.fromMonday
      : WEEKDAYS.fromSunday;

    const handleMonthChange = (value) => () => {
      if (value > 0 && month === LAST_MONTH) {
        setMonth(FIRST_MONTH);
        setYear((prevYear) => prevYear + value);
      } else if (value < 0 && month === FIRST_MONTH) {
        setMonth(LAST_MONTH);
        setYear((prevYear) => prevYear + value);
      } else {
        setMonth((prevMonth) => prevMonth + value);
      }
    };

    const handleYearChange = (value) => () => {
      setYear((prevYear) => prevYear + value);
    };

    return (
      <>
        <Component
          year={year}
          month={month}
          setDate={setDate}
          fromRange={fromRange}
          setFromRange={setFromRange}
          toRange={toRange}
          setToRange={setToRange}
          handleMonthChange={handleMonthChange}
          handleYearChange={handleYearChange}
          startWeekday={startWeekday}
        />
      </>
    );
  };
}
