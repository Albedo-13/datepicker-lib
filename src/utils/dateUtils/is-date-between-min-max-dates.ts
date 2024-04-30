import { MAX_DATE_STRING, MIN_DATE_STRING } from "@/constants/constants";

import { createDateFromString } from "./create-date-from-string";

export const isDateBetweenMinMaxDates = (
  date: Date,
  minDateString?: string,
  maxDateString?: string
) => {
  if (minDateString && maxDateString) {
    const [minDate, maxDate] = [minDateString, maxDateString].map((date) =>
      createDateFromString(date)
    );
    return (
      date.getTime() >= (minDate as Date).getTime() &&
      date.getTime() <= (maxDate as Date).getTime()
    );
  } else {
    return (
      date.getTime() >=
        (createDateFromString(MIN_DATE_STRING) as Date).getTime() &&
      date.getTime() <=
        (createDateFromString(MAX_DATE_STRING) as Date).getTime()
    );
  }
};