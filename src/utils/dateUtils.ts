import {
  SATURDAY_NUMBER,
  SUNDAY_NUMBER,
  SUNDAY_NUMBER_AS_7,
} from "@/constants/constants";
import { holidays } from "@/mocks/holidays";

import { splitString } from "./inputUtils";

export const getDaysFromMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

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

export const createDateWithTimezoneOffset = (
  year: number,
  month: number,
  day = 1
) => {
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, day, 0, -offset, 0, 0);
};

export const createDateWithTimezoneOffsetFromString = (date: string) => {
  if (!date) return null;

  const { day, month, year } = splitString(date);
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, day, 0, -offset, 0, 0);
};

const getWeekdayOfMonthStart = (year: number, month: number) => {
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, 1, 0, -offset, 0, 0).getDay();
};

const getTimezoneOffset = (year: number, month: number) => {
  const date = new Date(year, month, 1, 0, 0, 0, 0);
  return date.getTimezoneOffset();
};

export const nextDate = (date: Date, value: number) => {
  const next = new Date(date);
  next.setDate(date.getDate() + value);
  return next;
};

export const isDayBelongsToMonth = (date: Date, month: number) =>
  date.getMonth() === month - 1;

export const isDatesEqual = (date1: Date, date2: Date) =>
  date1?.toString() === date2?.toString();

export const isBetweenDates = (
  currentDate: Date,
  dateBorder1?: Date,
  dateBorder2?: Date
) => {
  if (currentDate && dateBorder1 && dateBorder2) {
    const [borderLeft, borderRight] = [dateBorder1, dateBorder2].sort(
      (a, b) => a.getTime() - b.getTime()
    );
    return currentDate >= borderLeft && currentDate <= borderRight;
  }
  return false;
};

const isHoliday = (month: number, day: number) => {
  return holidays.some(
    (holiday) => holiday.date.month === month && holiday.date.day === day
  );
};

const isWeekend = (date: Date) => {
  return date.getDay() === SATURDAY_NUMBER || date.getDay() === SUNDAY_NUMBER;
};

export const isWeekendOrHoliday = (date: Date) =>
  isWeekend(date) || isHoliday(date.getMonth() + 1, date.getDate());
