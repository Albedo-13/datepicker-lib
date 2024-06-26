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
import { splitDate } from "@/utils";

export function withCalendarLogic(
  Component: ComponentType<CalendarBodyType & CalendarHeadType>,
  startFromMonday: boolean,
  isHolidaysVisible: boolean,
  isWeekendsVisible: boolean,
  fromRange: Date,
  setFromRange: Dispatch<SetStateAction<Date>>,
  maxValue?: string,
  minValue?: string,
  toRange?: Date,
  setToRange?: Dispatch<SetStateAction<Date>>
) {
  return function calendarLogic() {
    const [type, setType] = useState<CalendarType>("weeks");
    const [year, setYear] = useState(splitDate(fromRange).year);
    const [month, setMonth] = useState(splitDate(fromRange).month);

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
        setFromRange={setFromRange}
        type={type}
        setType={setType}
        fromRange={fromRange}
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
