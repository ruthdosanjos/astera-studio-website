const fontFamilies = {
  brand: '"ASTERAV1", sans-serif',
  display: '"ASTERAV1", sans-serif',
  editorial: '"Playfair Display", serif',
  serif: '"Playfair Display", serif',
  sans: '"DM Sans", sans-serif',
} as const

export const F = {
  ...fontFamilies,

  heading: fontFamilies.sans,
  body: fontFamilies.sans,
  interface: fontFamilies.sans,

  eyebrow: fontFamilies.sans,
  metadata: fontFamilies.sans,
  micro: fontFamilies.sans,
} as const