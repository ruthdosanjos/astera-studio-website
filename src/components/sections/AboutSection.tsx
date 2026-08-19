import { C, F, S } from '@/theme'

const IDENTITIES = [
  {
    index: '01',
    label: 'Independente',
    description: 'Estrutura enxuta, próxima e colaborativa.',
  },
  {
    index: '02',
    label: 'Potiguar',
    description: 'Criado no Rio Grande do Norte, conectado ao mundo.',
  },
  {
    index: '03',
    label: 'Digital First',
    description: 'Pensado para marcas e experiências no ambiente digital.',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: C.black,
        padding: `${S.sectionPaddingY} ${S.pageGutter}`,
      }}
    >
      <h2 className="sr-only">Sobre a Astera</h2>

      {/* Identity */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ borderBottom: '1px solid rgba(244,241,234,0.07)', paddingBottom: 'clamp(3rem, 5vw, 5rem)', marginBottom: 'clamp(3.5rem, 6vw, 6.5rem)' }}
      >
        {IDENTITIES.map(identity => (
          <div
            key={identity.index}
            className="border-b py-8 first:pt-0 last:border-b-0 last:pb-0 md:border-r md:border-b-0 md:px-[clamp(1.25rem,3vw,3.5rem)] md:py-0 md:first:pl-0 md:last:border-r-0"
            style={{ borderColor: 'rgba(244,241,234,0.07)' }}
          >
            <div
              style={{
                fontFamily: F.sans,
                fontWeight: 500,
                fontSize: 'clamp(1.9rem, 3.4vw, 3.75rem)',
                color: C.turquoise,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              {identity.index}
            </div>

            <h3
              style={{
                fontFamily: F.sans,
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: C.white,
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              {identity.label}
            </h3>

            <p
              style={{
                fontFamily: F.sans,
                fontSize: '0.96rem',
                fontWeight: 500,
                lineHeight: 1.65,
                color: 'rgba(244,241,234,0.62)',
                maxWidth: '290px',
              }}
            >
              {identity.description}
            </p>
          </div>
        ))}
      </div>

      {/* Manifesto */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1.75rem',
          }}
        >
          <span
            aria-hidden="true"
            style={{ display: 'block', width: '28px', height: '1px', backgroundColor: C.turquoise }}
          />
          <p
            style={{
              fontFamily: F.sans,
              fontSize: '0.64rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: C.accentTechnical,
              textTransform: 'uppercase',
            }}
          >
            O Estúdio
          </p>
        </div>

        <h3
          style={{
            fontFamily: F.editorial,
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: 'clamp(1.55rem, 3vw, 3.1rem)',
            lineHeight: 1.32,
            color: C.white,
            maxWidth: '860px',
            margin: '0 auto 2rem',
            textWrap: 'balance',
          }}
        >
          Acreditamos que marcas relevantes não são construídas por acaso.
        </h3>

        <p
          style={{
            fontFamily: F.sans,
            fontSize: '0.95rem',
            fontWeight: 500,
            lineHeight: 1.75,
            color: 'rgba(244,241,234,0.62)',
            maxWidth: '680px',
            margin: '0 auto 2rem',
            textWrap: 'balance',
          }}
        >
          Elas nascem de boas perguntas, decisões conscientes e da capacidade de transformar ideias em experiências que fazem sentido para as pessoas.
        </p>

        <div style={{ width: '36px', height: '1px', backgroundColor: C.orange, margin: '0 auto' }} />
      </div>
    </section>
  )
}
