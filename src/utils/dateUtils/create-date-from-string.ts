import { splitString } from "../inputUtils/split-string";
import { getTimezoneOffset } from "./get-timezone-offset";

export const createDateFromString = (date?: string) => {
  if (!date) return null;

  const { day, month, year } = splitString(date);
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, day, 0, -offset, 0, 0);
};

export const nextDate = (date: Date, value: number) => {
  const next = new Date(date);
  next.setDate(date.getDate() + value);
  return next;
};