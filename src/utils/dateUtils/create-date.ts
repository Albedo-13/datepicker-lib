import { FIRST_DAY } from "@/constants/constants";

import { getTimezoneOffset } from "./get-timezone-offset";

export const createDate = (year: number, month: number, day = FIRST_DAY) => {
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, day, 0, -offset, 0, 0);
};

export const createDateNow = () => {
  const currentDate = new Date();
  const offset = getTimezoneOffset(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    -offset,
    0,
    0
  );
};
