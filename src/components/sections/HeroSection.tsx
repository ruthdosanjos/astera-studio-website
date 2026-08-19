import { useEffect, useRef } from 'react'
import { HoverButton } from '@/components/ui'
import OrbitalDiagram from '@/components/graphics/OrbitalDiagram'
import { C, F, S } from '@/theme'
import { PROJECT_START_URL } from '@/constants/links'

const TICKER = [
  'Brand Identity',
  'Web Design',
  'Digital Experience',
  'E-commerce',
  'Creative Direction',
  'UI/UX Design',
  'Visual Identity',
  'Motion Design',
]

export function HeroSection() {
  const tickerTrackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tickerTrack = tickerTrackRef.current
    if (!tickerTrack || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      tickerTrack.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
    })

    observer.observe(tickerTrack)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: C.black,
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 55% 65% at 72% 48%, rgba(70,121,120,0.075) 0%, transparent 68%)',
        }}
      />

      {/* Main content */}
      <div
        className="items-start [@media(min-width:1024px)_and_(min-height:1000px)]:items-center"
        style={{
          flex: 1,
          display: 'flex',
          padding: `clamp(7rem, 10vh, 8.5rem) ${S.pageGutter} clamp(2rem, 3vw, 3rem)`,
        }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '2rem',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '28px',
                  height: '1px',
                  backgroundColor: C.turquoise,
                  flexShrink: 0,
                }}
              />

              <span
                style={{
                  fontFamily: F.sans,
                  fontSize: '0.64rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  color: C.accentTechnical,
                  textTransform: 'uppercase',
                }}
              >
                Art · Design · Technology
              </span>
            </div>

            <h1
              style={{
                fontFamily: F.heading,
                fontWeight: 600,
                fontSize: 'clamp(2.6rem, 3.9vw, 4.9rem)',
                lineHeight: 0.94,
                color: 'rgba(244, 241, 234, 0.92)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                maxWidth: '680px',
              }}
            >
              <span style={{ display: 'block' }}>
                Onde ideias
              </span>

              <span style={{ display: 'block' }}>
                se tornam
              </span>

              <span
                style={{
                  display: 'block',
                  fontFamily: F.display,
                  fontWeight: 400,
                  fontSize: '0.74em',
                  lineHeight: 1.05,
                  letterSpacing: '0.05em',
                  color: 'transparent',
                  WebkitTextStroke: '1.2px #F4F1EA',
                  textShadow: '0 0 10px rgba(244, 241, 234, 0.05)',
                  marginTop: '0.12em',
                  marginLeft: '0.12em',
                  marginBottom: '0.12em',
                }}
              >
                Marcas
              </span>

              <span style={{ display: 'block' }}>
                memoráveis.
              </span>
            </h1>

            <p
              style={{
                fontFamily: F.sans,
                fontSize: '0.93rem',
                lineHeight: 1.78,
                color: C.white,
                opacity: 0.62,
                maxWidth: '410px',
                marginBottom: '2.5rem',
              }}
            >
             Um estúdio criativo independente onde estratégia, design e tecnologia 
             se encontram para criar experiências digitais com propósito e personalidade.

            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <HoverButton
                variant="primary"
                label="Iniciar Projeto"
                href={PROJECT_START_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
              <HoverButton variant="ghost" label="Ver Trabalhos" href="#work" />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '3.5rem',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '1px',
                  height: '40px',
                  backgroundColor: 'rgba(244,241,234,0.12)',
                }}
              />

              <span
                style={{
                  fontFamily: F.sans,
                  fontSize: '0.64rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  color: C.white,
                  opacity: 0.5,
                  textTransform: 'uppercase',
                }}
              >
                Independent Creative Studio · Brazil
              </span>
            </div>
          </div>

          {/* Right: orbital */}
          <div
            className="translate-y-0 lg:-translate-y-15"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'clamp(300px, 42vw, 460px)',
            }}
          >
            <OrbitalDiagram />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        aria-hidden="true"
        style={{
          borderTop: `1px solid ${C.lineSubtle}`,
          overflow: 'hidden',
          padding: '15px 0',
        }}
      >
        <div
          ref={tickerTrackRef}
          className="hero-ticker-track"
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'ticker-scroll 30s linear infinite',
          }}
        >
          {[0, 1].map((_, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              {TICKER.map((item, j) => (
                <span
                  key={j}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                    padding: '0 2.5rem',
                    fontFamily: F.sans,
                    fontSize: '0.62rem',
                    letterSpacing: '0.24em',
                    color: C.white,
                    opacity: 0.17,
                    textTransform: 'uppercase',
                  }}
                >
                  {item}
                  <span style={{ color: C.orange, opacity: 0.55 }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
