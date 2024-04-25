export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CALENDAR_CELLS_SIZE = 42;
export const WEEK_SIZE = 7;

export const WEEKDAYS = {
  fromMonday: {
    thumbs: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    calendarOffset: 1,
  },
  fromSunday: {
    thumbs: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    calendarOffset: 0,
  },
};

export const FIRST_MONTH = 1;
export const LAST_MONTH = 12;

export const FIRST_DAY = 1;

export const SATURDAY_NUMBER = 6;
export const SUNDAY_NUMBER = 0;
export const SUNDAY_NUMBER_AS_7 = 7;

export const MIN_YEAR = 1970;
export const MAX_YEAR = 2037;

export const MIN_DATE_STRING = `01/0${FIRST_MONTH}/${MIN_YEAR}`;
export const MAX_DATE_STRING = `31/${LAST_MONTH}/${MAX_YEAR}`;

export const INPUT_REGEX = /^\d{2}\/\d{2}\/\d{4}$/;
