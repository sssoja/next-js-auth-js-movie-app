export function roundToDecimal(number: number, decimalPlaces: number) {
  if (isNaN(number) || isNaN(decimalPlaces) || decimalPlaces < 0) {
    // Input validation: Check if the input is a valid number and if decimalPlaces is a non-negative number.
    console.error("Invalid input");
    return null;
  }

  // Use toFixed to round the number to the specified decimal places and convert it back to a number.
  const roundedNumber = Number(number.toFixed(decimalPlaces));

  // Check if the rounded number is a whole number, and append ".0" if true.
  return roundedNumber % 1 === 0 ? `${roundedNumber}.0` : roundedNumber;
}
