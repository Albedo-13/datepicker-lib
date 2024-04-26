import {
  FIRST_DAY,
  FIRST_MONTH,
  INPUT_REGEX,
  LAST_MONTH,
  MAX_YEAR,
  MIN_YEAR,
} from "@/constants/constants";

import { createDateFromString, getDaysFromMonth } from "./dateUtils";

export const splitDate = (date: Date) => {
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  return { day, month, year };
};

export const splitString = (value: string) => {
  const [day, month, year] = value.split("/").map((item) => parseInt(item));
  return { day, month, year };
};

export const formatValue = (text: string) => {
  const onlyDigits = text.replace(/\D/g, "");
  let formattedText = onlyDigits.slice(0, 2);
  if (onlyDigits.length > 2) {
    formattedText += "/" + onlyDigits.slice(2, 4);
  }
  if (onlyDigits.length > 4) {
    formattedText += "/" + onlyDigits.slice(4, 8);
  }
  return formattedText;
};

const zeroPrefix = (num: number) => (num < 10 ? `0${num}` : num);

const getDataInMinMaxRange = (
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

const getDataInMinMaxConstants = (value: string) => {
  let { day, month, year } = splitString(value);
  year = Math.max(MIN_YEAR, Math.min(MAX_YEAR, year));
  month = Math.max(FIRST_MONTH, Math.min(LAST_MONTH, month));
  day = Math.max(FIRST_DAY, Math.min(getDaysFromMonth(year, month), day));
  return `${zeroPrefix(day)}/${zeroPrefix(month)}/${year}`;
};

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

export const parseInputDate = (value: Date) => {
  const { day, month, year } = splitDate(value);
  return `${zeroPrefix(day)}/${zeroPrefix(month)}/${year}`;
};
