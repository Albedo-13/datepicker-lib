export const getTimezoneOffset = (year: number, month: number) => {
  const date = new Date(year, month, 1, 0, 0, 0, 0);
  return date.getTimezoneOffset();
};
