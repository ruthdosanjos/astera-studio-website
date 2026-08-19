import { C, F } from '@/theme'

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p
      style={{
        fontFamily: F.eyebrow,
        fontSize: '0.62rem',
        letterSpacing: '0.28em',
        color: C.accentTechnical,
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}
    >
      {index} — {label}
    </p>
  )
}

export default SectionLabel

