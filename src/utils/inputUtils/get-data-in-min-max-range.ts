import { createDateFromString } from "@/utils";

export const getDataInMinMaxRange = (
  value: string,
  minValue: string,
  maxValue: string
) => {
  const date = (createDateFromString(value) as Date).getTime();
  const minDate = (createDateFromString(minValue) as Date).getTime();
  const maxDate = (createDateFromString(maxValue) as Date).getTime();
  if (date >= minDate && date <= maxDate) {
    return value;
  } else if (date < minDate) {
    return minValue;
  } else if (date > maxDate) {
    return maxValue;
  } else {
    return value;
  }
};
