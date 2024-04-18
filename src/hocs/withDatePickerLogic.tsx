import React, { useState } from "react";

export function withDatePickerLogic(Component) {
  return () => {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(12);

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

    console.log(year, month);

    return (
      <>
        <Component
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          onMonthIncrement={handleMonthIncrement}
          onMonthDecrement={handleMonthDecrement}
        />
      </>
    );
  };
}
