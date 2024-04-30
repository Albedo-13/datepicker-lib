import { FIRST_DAY, FIRST_MONTH, LAST_MONTH, MAX_YEAR, MIN_YEAR } from "@/constants/constants";
import { getDaysFromMonth } from "@/utils";

import { splitString } from "./split-string";
import { zeroPrefix } from "./zero-prefix";

export const getDataInMinMaxConstants = (value: string) => {
  let { day, month, year } = splitString(value);
  year = Math.max(MIN_YEAR, Math.min(MAX_YEAR, year));
  month = Math.max(FIRST_MONTH, Math.min(LAST_MONTH, month));
  day = Math.max(FIRST_DAY, Math.min(getDaysFromMonth(year, month), day));
  return `${zeroPrefix(day)}/${zeroPrefix(month)}/${year}`;
};