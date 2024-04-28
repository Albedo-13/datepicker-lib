import { SUNDAY_NUMBER, SUNDAY_NUMBER_AS_7 } from "@/constants/constants";

import { getDaysFromMonth } from "./get-days-from-month";
import { getTimezoneOffset } from "./get-timezone-offset";
import { getWeekdayOfMonthStart } from "./get-weekday-of-month-start";

export const getStartDateFromPreviousMonth = (
  currentYear: number,
  currentMonth: number,
  weekdayOffset = 1
) => {
  let weekdayOfCurrentMonthStart = getWeekdayOfMonthStart(
    currentYear,
    currentMonth
  );
  weekdayOfCurrentMonthStart =
    weekdayOfCurrentMonthStart === SUNDAY_NUMBER
      ? SUNDAY_NUMBER_AS_7
      : weekdayOfCurrentMonthStart;
  const daysFromMonth = getDaysFromMonth(currentYear, currentMonth - 1);
  const leftDaysFromPreviousMonth =
    daysFromMonth - (daysFromMonth - weekdayOfCurrentMonthStart) - 1;
  const offset = getTimezoneOffset(currentYear, currentMonth);
  return new Date(
    currentYear,
    currentMonth - 1,
    -leftDaysFromPreviousMonth + weekdayOffset,
    0,
    -offset,
    0,
    0
  );
};
