import { splitDate } from "./split-date";
import { zeroPrefix } from "./zero-prefix";

export const parseInputDate = (value: Date) => {
  const { day, month, year } = splitDate(value);
  return `${zeroPrefix(day)}/${zeroPrefix(month)}/${year}`;
};