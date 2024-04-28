import { SATURDAY_NUMBER, SUNDAY_NUMBER } from "@/constants/constants";

export const isWeekend = (date: Date) => {
  return date.getDay() === SATURDAY_NUMBER || date.getDay() === SUNDAY_NUMBER;
};
