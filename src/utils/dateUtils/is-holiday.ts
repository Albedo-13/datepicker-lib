import { holidays } from "@/mocks/holidays";

export const isHoliday = (month: number, day: number) => {
  return holidays.some(
    (holiday) => holiday.date.month === month && holiday.date.day === day
  );
};
