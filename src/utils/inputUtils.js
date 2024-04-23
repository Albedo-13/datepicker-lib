import {
  FIRST_DAY,
  FIRST_MONTH,
  INPUT_REGEX,
  LAST_MONTH,
  MAX_YEAR,
  MIN_YEAR,
} from "@/constants/constants";

import { getDaysFromMonth } from "./dateUtils";

export const splitDate = (date) => {
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  return { day, month, year };
};

export const splitString = (value) => {
  const [day, month, year] = value.split("/").map((item) => parseInt(item));
  return { day, month, year };
};

export const formatValue = (text) => {
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

const zeroPrefix = (num) => (num < 10 ? `0${num}` : num);

// value = 25/07/2001
export const transformValue = (value) => {
  let { day, month, year } = splitString(value);
  if (INPUT_REGEX.test(value)) {
    year = Math.max(MIN_YEAR, Math.min(MAX_YEAR, year));
    month = Math.max(FIRST_MONTH, Math.min(LAST_MONTH, month));
    day = Math.max(FIRST_DAY, Math.min(getDaysFromMonth(year, month), day));
    return `${zeroPrefix(day)}/${zeroPrefix(month)}/${year}`;
  }

  return value;
};

export const parseInputDate = (value) => {
  const { day, month, year } = splitDate(value);
  return `${zeroPrefix(day)}/${zeroPrefix(month)}/${year}`;
};
