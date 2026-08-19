import { HoverButton } from '@/components/ui'
import { C, F, S } from '@/theme'
import { PROJECT_START_URL } from '@/constants/links'

const CONTACTS = [
  { label: 'Email', value: 'goastera.contato@gmail.com', href: 'mailto:goastera.contato@gmail.com' },
  { label: 'Instagram', value: '@goastera', href: 'https://www.instagram.com/goastera/', external: true },
  { label: 'LinkedIn', value: 'Astera Studio', href: 'https://www.linkedin.com/company/astera-studio/?viewAsMember=true', external: true },
]

export function CtaSection() {
  return (
    <section id="contact" style={{ backgroundColor: '#0c0c0c', padding: `clamp(6rem, 10vw, 10rem) ${S.pageGutter}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(70,121,120,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: C.lineSubtle }} />

      <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: F.sans, fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.22em', color: C.accentTechnical, textTransform: 'uppercase', marginBottom: '2rem' }}>
          — Próximo Passo
        </p>

        <h2 className="text-[1.05rem] sm:text-[clamp(1.3rem,3.5vw,3.75rem)]" style={{
          fontFamily: F.display,
          fontWeight: 900,
          textTransform: 'uppercase',
          color: C.textPrimary,
          lineHeight: 1.2,
          letterSpacing: 0,
          marginBottom: '2.5rem',
        }}>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Vamos construir</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap', color: C.turquoise }}>o próximo</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>passo da sua marca.</span>
        </h2>

        <p style={{ fontFamily: F.sans, fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.7, color: 'rgba(244,241,234,0.64)', maxWidth: '490px', margin: '0 auto 3rem' }}>
         Na Astera, cada experiência digital é feita para permanecer. </p>

        <HoverButton
          variant="primary"
          label="INICIAR PROJETO →"
          large
          href={PROJECT_START_URL}
          target="_blank"
          rel="noopener noreferrer"
        />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center" style={{ marginTop: '4rem' }}>
          {CONTACTS.map((contact, i) => (
            <div
              key={contact.label}
              className={i > 0 ? 'border-t sm:border-t-0 sm:border-l border-[rgba(244,241,234,0.1)]' : undefined}
              style={{ padding: '1.35rem clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              <a
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#467978] hover:opacity-100"
                style={{ display: 'block', color: C.textPrimary, opacity: 0.76, textDecoration: 'none', transition: 'opacity 0.25s ease' }}
              >
                <span style={{ display: 'block', fontFamily: F.sans, fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', color: C.accentTechnical }}>{contact.label}</span>
                <span style={{ display: 'block', fontFamily: F.sans, fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.45 }}>{contact.value}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
