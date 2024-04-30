export const splitString = (value: string) => {
  const [day, month, year] = value.split("/").map((item) => parseInt(item));
  return { day, month, year };
};