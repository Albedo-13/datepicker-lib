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
