import { INPUT_REGEX } from "@/constants/constants";

import { getDataInMinMaxConstants } from "./get-data-in-min-max-constants";
import { getDataInMinMaxRange } from "./get-data-in-min-max-range";

export const transformValue = (
  value: string,
  minValue?: string,
  maxValue?: string
) => {
  if (INPUT_REGEX.test(value)) {
    if (minValue && maxValue) {
      return getDataInMinMaxRange(value, minValue, maxValue);
    } else {
      return getDataInMinMaxConstants(value);
    }
  }

  return value;
};