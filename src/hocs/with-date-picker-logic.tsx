import React, { useState } from "react";

import { WEEKDAYS } from "@/constants/constants";
import { WeekdaysItemType } from "@/types/types";

export function withDatePickerLogic(Component, startFromMonday) {
  return function datePickerLogic() {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(12);

    const [pickedCell, setPickedCell] = useState(null);
    // const [fromRange, setFromRange] = useState(null);
    // const [toRange, setToRange] = useState(null);

    const startWeekday: WeekdaysItemType = startFromMonday
      ? WEEKDAYS.fromMonday
      : WEEKDAYS.fromSunday;

    const handleMonthIncrement = () => {
      if (month === 12) {
        setMonth(1);
        setYear((prevYear) => prevYear + 1);
      } else {
        setMonth((prevMonth) => prevMonth + 1);
      }
    };

    const handleMonthDecrement = () => {
      if (month === 1) {
        setMonth(12);
        setYear((prevYear) => prevYear - 1);
      } else {
        setMonth((prevMonth) => prevMonth - 1);
      }
    };

    return (
      <>
        <Component
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          pickedCell={pickedCell}
          setPickedCell={setPickedCell}
          onMonthIncrement={handleMonthIncrement}
          onMonthDecrement={handleMonthDecrement}
          startWeekday={startWeekday}
        />
      </>
    );
  };
}
