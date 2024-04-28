export const isBetweenDates = (
  currentDate: Date,
  dateBorder1?: Date,
  dateBorder2?: Date
) => {
  if (currentDate && dateBorder1 && dateBorder2) {
    const [borderLeft, borderRight] = [dateBorder1, dateBorder2].sort(
      (a, b) => a.getTime() - b.getTime()
    );
    return currentDate >= borderLeft && currentDate <= borderRight;
  }
  return false;
};