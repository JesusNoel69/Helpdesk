// src/shared/validators/colorValidator.mjs

const cssColorNames = new Set([
  "red",
  "green",
  "blue",
  "black",
  "white",
  "yellow",
  "orange",
  "gray",
  "purple",
  "pink",
  "lime",
  "teal",
  "navy",
  "aqua",
  "fuchsia",
  "bluelight",
  "maroon",
  "olive",
  "silver",
  "cyan",
]);

export function isValidColorCode(color) {
  if (typeof color !== "string") return false;

  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
  const rgbPattern = /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/;
  const hslPattern = /^hsl\(\d{1,3}, ?\d{1,3}%, ?\d{1,3}%\)$/;

  return (
    hexPattern.test(color) ||
    rgbPattern.test(color) ||
    hslPattern.test(color) ||
    cssColorNames.has(color.toLowerCase())
  );
}
