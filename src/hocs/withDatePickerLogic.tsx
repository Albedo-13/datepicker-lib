import React, { useState } from "react";

export function withDatePickerLogic(Component) {
  return () => {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(9);

    console.log(year, month);

    return (
      <>
        <Component
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
        />
      </>
    );
  };
}
