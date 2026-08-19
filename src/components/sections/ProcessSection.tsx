import { useState } from 'react'
import { SectionHeader } from '@/components/ui'
import type { ProcessStep } from '@/types'
import { C, F, S } from '@/theme'

const PROCESS: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Imersão',
    body: 'Começamos pelas perguntas certas. Entendemos o contexto, os objetivos e os desafios da marca antes de definir qualquer direção.',
  },
  {
    num: '02',
    title: 'Strategy',
    subtitle: 'Direção',
    body: 'Transformamos os aprendizados em uma direção clara, definindo prioridades e decisões que orientam todo o projeto.',
  },
  {
    num: '03',
    title: 'Design',
    subtitle: 'Criação',
    body: 'A direção ganha forma através de conceitos, sistemas visuais e experiências que traduzem a essência e os objetivos da marca.',
  },
  {
    num: '04',
    title: 'Development',
    subtitle: 'Desenvolvimento',
    body: 'Transformamos o design em experiências digitais funcionais, responsivas e acessíveis, com atenção à performance e aos detalhes técnicos.',
  },
  {
    num: '05',
    title: 'Delivery',
    subtitle: 'Entrega',
    body: 'Finalizamos o projeto com cuidado, organizamos os materiais e preparamos tudo o que a marca precisa para seguir com clareza e autonomia.',
  },
]

export function ProcessSection() {
  const [active, setActive] = useState(0)
  const step = PROCESS[active]

  return (
    <section id="process" style={{ backgroundColor: C.black, padding: `${S.sectionPaddingY} ${S.pageGutter}` }}>
     <SectionHeader index="02" label="Processo">
      Como<br />trabalhamos
     </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 lg:gap-16 items-start">
        {/* Steps */}
        <div>
          {PROCESS.map((s, i) => (
            <div
              key={s.num}
              style={{ borderTop: `1px solid ${C.lineSubtle}` }}
            >
              <button
                type="button"
                aria-expanded={active === i}
                aria-controls={`process-step-${s.num}-description`}
                aria-label={`${s.num} ${s.title}, ${s.subtitle}`}
                onClick={() => setActive(i)}
                className="w-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#467978]"
                style={{
                  display: 'block',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: active === i ? '1.35rem 0 0' : '1.35rem 0',
                  color: C.textPrimary,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) auto',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: 0 }}>
                    <span style={{ fontFamily: F.sans, fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.15em', color: active === i ? C.orange : C.accentTechnical, minWidth: '1.8rem' }}>
                    {s.num}
                    </span>
                    <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1rem, 1.45vw, 1.25rem)', letterSpacing: 0, lineHeight: 1.1, textTransform: 'uppercase', color: active === i ? C.textPrimary : 'rgba(244,241,234,0.58)', textWrap: 'balance' }}>
                    {s.title}
                    </span>
                  </span>
                  <span style={{ fontFamily: F.serif, fontStyle: 'italic', fontSize: '0.86rem', lineHeight: 1.4, color: active === i ? 'rgba(244,241,234,0.78)' : 'rgba(244,241,234,0.52)', textAlign: 'right' }}>
                  {s.subtitle}
                  </span>
                </span>
              </button>
              <div
                id={`process-step-${s.num}-description`}
                hidden={active !== i}
                style={{ paddingLeft: 'calc(1.8rem + 16px)', paddingBottom: '1.35rem' }}
              >
                <p style={{ fontFamily: F.sans, fontSize: '0.92rem', fontWeight: 500, lineHeight: 1.7, color: 'rgba(244,241,234,0.62)', maxWidth: '520px', marginTop: '1rem' }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${C.lineSubtle}` }} />
        </div>

        {/* Visual panel */}
        <div
          className="hidden lg:flex items-center justify-center"
          aria-hidden="true"
          style={{ backgroundColor: 'rgba(70,121,120,0.032)', border: '1px solid rgba(70,121,120,0.14)', minHeight: '380px', position: 'relative', overflow: 'hidden' }}
        >
          {/* Ghost number */}
          <div style={{ position: 'absolute', fontFamily: F.display, fontWeight: 900, fontSize: '16rem', color: C.white, opacity: 0.016, letterSpacing: '-0.06em', lineHeight: 1, userSelect: 'none', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            {step.num}
          </div>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(2rem, 4vw, 3.25rem)' }}>
            <p style={{ fontFamily: F.sans, fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.22em', color: C.accentTechnical, textTransform: 'uppercase', marginBottom: '1rem' }}>
              {step.num} — {step.subtitle}
            </p>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)', lineHeight: 1.05, textTransform: 'uppercase', color: C.textPrimary, letterSpacing: 0, marginBottom: '1.25rem', textWrap: 'balance' }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: F.sans, fontSize: '0.92rem', fontWeight: 500, lineHeight: 1.7, color: 'rgba(244,241,234,0.62)', maxWidth: '380px', margin: '0 auto' }}>
              {step.body}
            </p>
          </div>

          {[['top','14px','right','14px','borderTop','borderRight'],['bottom','14px','left','14px','borderBottom','borderLeft'],['top','14px','left','14px','borderTop','borderLeft'],['bottom','14px','right','14px','borderBottom','borderRight']].map(([v1,n1,v2,n2,b1,b2], i) => (
            <div key={i} style={{ position: 'absolute', [v1]: n1, [v2]: n2, width: '18px', height: '18px', [b1]: `1px solid rgba(70,121,120,0.38)`, [b2]: `1px solid rgba(70,121,120,0.38)` }} />
          ))}
        </div>
      </div>
    </section>
  )
}
