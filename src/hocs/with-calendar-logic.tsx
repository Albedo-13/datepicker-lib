import React, {
  type ComponentType,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";

import { FIRST_MONTH, LAST_MONTH, WEEKDAYS } from "@/constants/constants";
import type {
  CalendarBodyType,
  CalendarHeadType,
  CalendarType,
} from "@/types/calendar";
import type { WeekdaysItemType } from "@/types/weekdays";
import { createDate } from "@/utils/dateUtils";

export function withCalendarLogic(
  Component: ComponentType<CalendarBodyType & CalendarHeadType>,
  startFromMonday: boolean,
  setDate: Dispatch<SetStateAction<Date>>,
  type: CalendarType,
  setType: Dispatch<SetStateAction<CalendarType>>,
  yearProp: number,
  monthProp: number,
  dayProp: number,
  isHolidaysVisible: boolean,
  isWeekendsVisible: boolean,
  maxValue?: string,
  minValue?: string
) {
  return function calendarLogic() {
    const [year, setYear] = useState(yearProp);
    const [month, setMonth] = useState(monthProp);

    const [fromRange, setFromRange] = useState<Date>(
      createDate(year, month, dayProp)
    );
    const [toRange, setToRange] = useState<Date>(
      createDate(year, month, dayProp)
    );

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
      setType("weeks");
    };

    const handleYearChange = (value: number) => () => {
      setYear((prevYear) => prevYear + value);
      setType("weeks");
    };

    const handleCalendarTypeChange = () => {
      switch (type) {
        case "weeks":
          setType("months");
          break;
        case "months":
          setType("years");
          break;
        case "years":
          setType("weeks");
          break;
        default:
          setType("weeks");
          break;
      }
    };

    return (
      <Component
        year={year}
        month={month}
        setDate={setDate}
        type={type}
        fromRange={fromRange}
        setFromRange={setFromRange}
        toRange={toRange}
        setToRange={setToRange}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        handleCalendarTypeChange={handleCalendarTypeChange}
        maxValue={maxValue}
        minValue={minValue}
        isHolidaysVisible={isHolidaysVisible}
        isWeekendsVisible={isWeekendsVisible}
        startWeekday={startWeekday}
      />
    );
  };
}
