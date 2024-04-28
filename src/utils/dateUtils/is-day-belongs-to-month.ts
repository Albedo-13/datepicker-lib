export const isDayBelongsToMonth = (date: Date, month: number) =>
  date.getMonth() === month - 1;
