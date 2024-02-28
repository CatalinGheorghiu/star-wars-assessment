/**
 * Format a string for URL use.
 * Replaces spaces with hyphens and converts to lowercase.
 */
export const formatStringForUrl = (str: string) => {
  return str?.toLowerCase().split(" ").join("-");
};
