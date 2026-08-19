import { useState } from 'react'
import type { Value } from '@/types'
import { C, F, M } from '@/theme'

type ValueCardProps = {
  val: Value
}

export function ValueCard({ val }: ValueCardProps) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(1.5rem, 2.4vw, 2.25rem)',
        borderTop: `2px solid ${h ? C.turquoise : 'transparent'}`,
        backgroundColor: h ? 'rgba(70,121,120,0.038)' : 'transparent',
        transition: `all ${M.uiFeedback}`,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div aria-hidden="true" style={{ fontFamily: F.sans, fontSize: '1.35rem', lineHeight: 1, color: C.turquoise, marginBottom: '1rem', opacity: h ? 0.92 : 0.66, transition: `opacity ${M.uiFeedback}` }}>
        {val.sym}
      </div>
      <div style={{ fontFamily: F.sans, fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.12em', color: C.accentTechnical, marginBottom: '0.75rem' }}>
        {val.num}
      </div>
      <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.05rem, 1.55vw, 1.3rem)', lineHeight: 1.1, textTransform: 'uppercase', color: C.textPrimary, letterSpacing: 0, marginBottom: '0.8rem', textWrap: 'balance' }}>
        {val.title}
      </h3>
      <div style={{ width: '20px', height: '1px', backgroundColor: h ? C.orange : 'rgba(244,241,234,0.2)', marginBottom: '0.85rem', transition: `background-color ${M.uiFeedback}` }} />
      <p style={{ fontFamily: F.sans, fontSize: 'clamp(0.88rem, 1vw, 0.95rem)', fontWeight: 500, lineHeight: 1.65, color: 'rgba(244,241,234,0.68)', maxWidth: '34rem' }}>
        {val.body}
      </p>
    </div>
  )
}
