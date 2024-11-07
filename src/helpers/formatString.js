/**
 * Trims a string to a specified length and adds an ellipsis (...) if the string exceeds that length.
 *
 * @param {string} string - The text to be sliced.
 * @param {number} [numberOfCharacters=14] - The maximum number of characters allowed before truncating.
 * @returns {string} - The formatted string with ellipsis if truncated, or the original string if within the limit.
 */
export const formatString = (string, numberOfCharacters = 14) => {
  const stringFormatted =
    string.length > numberOfCharacters
      ? `${string.substring(0, numberOfCharacters)}...`
      : string;
  return stringFormatted;
};
