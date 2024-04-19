export const getDaysFromMonth = (year, month) =>
  new Date(year, month, 0).getDate();

export const getStartDateFromPreviousMonth = (currentYear, currentMonth, weekdayOffset = 1) => {
  let weekdayOfCurrentMonthStart = getWeekdayOfMonthStart(currentYear, currentMonth);
  weekdayOfCurrentMonthStart = weekdayOfCurrentMonthStart === 0 ? 7 : weekdayOfCurrentMonthStart;
  const daysFromMonth = getDaysFromMonth(currentYear, currentMonth - 1);
  const leftDaysFromPreviousMonth = daysFromMonth - (daysFromMonth - weekdayOfCurrentMonthStart) - 1;
  const offset = getTimezoneOffset(currentYear, currentMonth);
  // TODO: -leftDaysFromPreviousMonth + 1 Change +1 to + 0 if need to start from Sunday
  return new Date(currentYear, currentMonth - 1, -leftDaysFromPreviousMonth + weekdayOffset, 0, -offset, 0, 0);
};

export const getWeekdayOfMonthStart = (year, month) => {
  // const date = new Date(year, month, 1, 0, 0, 0, 0);
  const offset = getTimezoneOffset(year, month);
  return new Date(year, month - 1, 1, 0, -offset, 0, 0).getDay();
};

export const getTimezoneOffset = (year, month) => {
  const date = new Date(year, month, 1, 0, 0, 0, 0);
  return date.getTimezoneOffset();
};

export const getDayFromDate = (date) => date.getDate();
export const getWeekdayFromDate = (date) => date.getDay();

export const getMonthFromDate = (date) => date.getMonth();
export const monthThumb = (monthName) => monthName.slice(0, 3);

export const nextDate = (date, value) => {
  const next = new Date(date);
  next.setDate(date.getDate() + value);
  console.log(next);
  return next;
};

export const isDayBelongsToMonth = (date, month) => date.getMonth() !== (month - 1);
