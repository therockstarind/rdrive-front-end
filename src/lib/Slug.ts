/**
 * Converts a string to a slug by lowercasing it, trimming leading and trailing whitespace,
 * replacing any non-word or non-space characters with an empty string, replacing all contiguous whitespace
 * with a single hyphen, and removing any hyphens from the beginning or end of the resulting string.
 */
export function slugify(str: string) {
    return str
      .toString()
      .toLowerCase()
      .trim() // Remove whitespace from both ends of a string
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  }