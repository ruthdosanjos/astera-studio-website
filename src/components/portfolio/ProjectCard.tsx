import { useState } from 'react'
import type { Project } from '@/types'
import { C, F, M } from '@/theme'

type ProjectCardProps = {
  proj: Project
}

export function ProjectCard({ proj }: ProjectCardProps) {
  const [h, setH] = useState(false)

  const metadataGradient = proj.lightArtwork
    ? 'linear-gradient(to top, rgba(9,9,9,0.94) 0%, rgba(9,9,9,0.72) 27%, rgba(9,9,9,0.22) 50%, transparent 72%)'
    : 'linear-gradient(to top, rgba(9,9,9,0.9) 0%, rgba(9,9,9,0.56) 25%, rgba(9,9,9,0.12) 49%, transparent 70%)'

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', backgroundColor: C.graphite }}
    >
      <div style={{ position: 'relative', paddingBottom: '66%', overflow: 'hidden' }}>
        <img
          src={proj.image}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: h ? 'scale(1.025)' : 'scale(1)',
            transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Gradient overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: metadataGradient,
          opacity: h ? 0.96 : 0.9,
          transition: 'opacity 0.4s ease',
        }} />

        {/* Content */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(1.25rem, 2vw, 2rem)' }}>
          <div style={{ transform: h ? 'translateY(0)' : 'translateY(4px)', transition: 'transform 0.4s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.65rem' }}>
              <span style={{ fontFamily: F.metadata, fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.12em', color: C.accentTechnical }}>{proj.num}</span>
            </div>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', textTransform: 'uppercase', color: C.textPrimary, letterSpacing: 0, lineHeight: 1.08, marginBottom: '0.55rem', textWrap: 'balance' }}>
              {proj.title}
            </h3>
            <p style={{ fontFamily: F.metadata, fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.09em', lineHeight: 1.5, color: 'rgba(244,241,234,0.76)', textTransform: 'uppercase' }}>
              {proj.category}
            </p>
          </div>
        </div>

        {/* View arrow */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 'clamp(1rem, 2vw, 1.5rem)', right: 'clamp(1rem, 2vw, 1.5rem)',
          width: '38px', height: '38px', border: '1px solid rgba(244,241,234,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.textPrimary, fontSize: '0.85rem',
          opacity: h ? 1 : 0, transform: h ? 'scale(1)' : 'scale(0.75)',
          transition: `all ${M.uiFeedback}`,
        }}>
          ↗
        </div>
      </div>
    </div>
  )
}
