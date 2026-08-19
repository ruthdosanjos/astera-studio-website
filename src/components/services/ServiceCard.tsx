import { useState } from 'react'
import type { Service } from '@/types'
import { C, F } from '@/theme'

type ServiceCardProps = {
  svc: Service
}

export function ServiceCard({ svc }: ServiceCardProps) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: h ? 'rgba(70,121,120,0.052)' : 'transparent',
        border: `1px solid ${h ? 'rgba(70,121,120,0.28)' : C.lineSubtle}`,
        padding: 'clamp(1.5rem, 2vw, 2.25rem)',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
        cursor: 'default',
        position: 'relative',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontFamily: F.sans, fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.18em', color: C.accentTechnical, marginBottom: '1.25rem' }}>
        {svc.num}
      </div>

      <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.25rem, 1.65vw, 1.55rem)', letterSpacing: 0, textTransform: 'uppercase', color: C.textPrimary, lineHeight: 1.08, marginBottom: '7px', textWrap: 'balance' }}>
        {svc.title}
      </h3>
      <p style={{ fontFamily: F.serif, fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.45, color: 'rgba(244,241,234,0.62)', marginBottom: '1.125rem' }}>
        {svc.subtitle}
      </p>

      <div style={{ width: h ? '40px' : '20px', height: '1px', backgroundColor: h ? C.orange : 'rgba(244,241,234,0.16)', transition: 'width 0.4s ease, background-color 0.4s ease', marginBottom: '1.125rem' }} />

      <p style={{ fontFamily: F.sans, fontSize: '0.92rem', fontWeight: 500, lineHeight: 1.7, color: 'rgba(244,241,234,0.62)', marginBottom: '1.25rem' }}>
        {svc.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
        {svc.tags.map(tag => (
          <span key={tag} style={{ fontFamily: F.sans, fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.1em', color: C.accentTechnical, border: '1px solid rgba(70,121,120,0.28)', padding: '5px 9px', textTransform: 'uppercase' }}>
            {tag}
          </span>
        ))}
      </div>

      {h && (
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '26px', height: '26px', borderTop: `2px solid ${C.turquoise}`, borderLeft: `2px solid ${C.turquoise}`, pointerEvents: 'none' }} />
      )}
    </div>
  )
}
