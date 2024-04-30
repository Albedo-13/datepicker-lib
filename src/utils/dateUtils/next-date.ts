export const nextDate = (date: Date, value: number) => {
  const next = new Date(date);
  next.setDate(date.getDate() + value);
  return next;
};