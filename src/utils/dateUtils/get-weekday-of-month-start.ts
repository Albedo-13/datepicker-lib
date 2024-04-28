import { getTimezoneOffset } from "./get-timezone-offset";

export const getWeekdayOfMonthStart = (year: number, month: number) => {
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, 1, 0, -offset, 0, 0).getDay();
};