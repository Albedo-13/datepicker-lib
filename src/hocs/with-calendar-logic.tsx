import React, { useState } from "react";

import { WEEKDAYS } from "@/constants/constants";
import { WeekdaysItemType } from "@/types/types";

export function withCalendarLogic(Component, startFromMonday) {
  return function calendarLogic() {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(12);

    // const [pickedCell, setPickedCell] = useState(null);
    const [fromRange, setFromRange] = useState(null);
    const [toRange, setToRange] = useState(null);

    const startWeekday: WeekdaysItemType = startFromMonday
      ? WEEKDAYS.fromMonday
      : WEEKDAYS.fromSunday;

    // const FIRST_MONTH = 1;
    // const LAST_MONTH = 12;

    const handleMonthChange = (value) => () => {
      if (value > 0 && month === 12) {
        setMonth(1);
        setYear((prevYear) => prevYear + value);
      } else if (value < 0 && month === 1) {
        setMonth(12);
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
          setYear={setYear}
          month={month}
          setMonth={setMonth}
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
