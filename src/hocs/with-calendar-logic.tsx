import React, {
  type ComponentType,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

import { FIRST_MONTH, LAST_MONTH, WEEKDAYS } from "@/constants/constants";
import type { CalendarBodyType, CalendarHeadType } from "@/types/calendar";
import type { WeekdaysItemType } from "@/types/weekdays";
import { createDateWithTimezoneOffset } from "@/utils/dateUtils";

export function withCalendarLogic(
  Component: ComponentType<CalendarBodyType & CalendarHeadType>,
  startFromMonday: boolean,
  setDate: Dispatch<SetStateAction<Date>>,
  yearProp: number,
  monthProp: number,
  dayProp: number
) {
  return function calendarLogic() {
    const [year, setYear] = useState(yearProp);
    const [month, setMonth] = useState(monthProp);

    const [fromRange, setFromRange] = useState<Date | null>(
      createDateWithTimezoneOffset(year, month, dayProp)
    );
    const [toRange, setToRange] = useState<Date | null>(null);

    const startWeekday: WeekdaysItemType = startFromMonday
      ? WEEKDAYS.fromMonday
      : WEEKDAYS.fromSunday;

    const handleMonthChange = (value: number) => () => {
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

    const handleYearChange = (value: number) => () => {
      setYear((prevYear) => prevYear + value);
    };

    return (
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
    );
  };
}
