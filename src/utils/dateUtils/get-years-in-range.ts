import { FIRST_DAY, FIRST_MONTH, MAX_DATE_STRING, MIN_DATE_STRING } from "@/constants/constants";

import { createDate } from "./create-date";
import { createDateFromString } from "./create-date-from-string";
import { isDateBetweenMinMaxDates } from "./is-date-between-min-max-dates";

export const getYearsInRange = (
  minDate: string,
  maxDate: string
): Array<number> => {
  minDate = minDate ?? MIN_DATE_STRING;
  maxDate = maxDate ?? MAX_DATE_STRING;
  const yearsList = [];
  const startDate = createDate(
    (createDateFromString(minDate) as Date).getFullYear(),
    FIRST_MONTH,
    FIRST_DAY
  ) as Date;

  let year = startDate.getFullYear();
  let isInRange = isDateBetweenMinMaxDates(startDate, minDate, maxDate);

  if (!isInRange) {
    isInRange = true;
    yearsList.push(year);
    ++year;
  }

  while (isInRange) {
    const newDate = createDate(year, FIRST_MONTH, FIRST_DAY);
    isInRange = isDateBetweenMinMaxDates(newDate, minDate, maxDate);
    if (!isInRange) break;

    yearsList.push(year);
    ++year;
  }

  return yearsList;
};
