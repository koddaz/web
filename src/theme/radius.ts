// Card radius is per-component (20/24/28, picked per screen) — never a single
// global "card" token. Only sm/md/lg/pill are shared constants.
export const radius = {
  sm: 8,
  md: 16,
  lg: 28,
  pill: 999,
} as const;
