// Named steps intentionally skip 5 and 7 to match the design system's --space-* scale.
export const spacing = {
  1: 4.4,
  2: 8.8,
  3: 13.2,
  4: 17.6,
  6: 26.4,
  8: 35.2,
} as const;

// Literal screen padding overrides — not derived from the spacing scale.
export const screenPadding = {
  mobile: 18,
  desktop: 48,
} as const;
