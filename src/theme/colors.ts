const brandColors = {
  black: '#090909',
  white: '#F4F1EA',
  orange: '#E86A33',
  turquoise: '#467978',
  deep: '#224B5A',
  graphite: '#222222',
  gray: '#D8D8D8',
} as const

export const C = {
  ...brandColors,
  canvas: 'var(--color-canvas)',
  textPrimary: 'var(--color-text-primary)',
  accentPrimary: 'var(--color-accent-primary)',
  accentTechnical: 'var(--color-accent-technical)',
  lineSubtle: 'var(--color-line-subtle)',
  surfaceAlternative: 'var(--color-surface-alternative)',
} as const
