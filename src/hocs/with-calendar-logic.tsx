import React, { useState } from "react";

import { FIRST_MONTH, LAST_MONTH, WEEKDAYS } from "@/constants/constants";
import { WeekdaysItemType } from "@/types/types";

export function withCalendarLogic(Component, startFromMonday) {
  return function calendarLogic(props) {
    // console.log(props);
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(12);

    // const [pickedCell, setPickedCell] = useState(null);
    const [fromRange, setFromRange] = useState(null);
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
          {...props}
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
