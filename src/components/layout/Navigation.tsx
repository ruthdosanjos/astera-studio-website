import { useEffect, useRef, useState } from 'react'
import { C, F, S } from '@/theme'
import { NavLink } from './NavLink'
import asteraLogo from '@/assets/brand/astera-logo-light.svg'
import { PROJECT_START_URL } from '@/constants/links'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Trabalhos', href: '#work' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleBreakpointChange)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleBreakpointChange)
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(9,9,9,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(244,241,234,0.06)' : 'transparent'}`,
        transition: 'background-color 0.5s ease, border-color 0.5s ease',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ height: '72px', padding: `0 ${S.pageGutter}` }}
      >
        <a
          href="#top"
          aria-label="Astera"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src={asteraLogo}
            alt="Astera"
            style={{
              display: 'block',
              width: 'clamp(120px, 12vw, 150px)',
              height: 'auto',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <NavLink key={item.href} label={item.label} href={item.href} />
          ))}
        </div>

        <a
          href={PROJECT_START_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          onFocus={() => setCtaHovered(true)}
          onBlur={() => setCtaHovered(false)}
          style={{
            fontFamily: F.body,
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: ctaHovered ? C.canvas : C.accentPrimary,
            backgroundColor: ctaHovered ? C.accentPrimary : 'transparent',
            border: `1px solid rgba(232,106,51,0.4)`,
            padding: '10px clamp(16px, 1.5vw, 22px)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            textDecoration: 'none',
          }}
        >
          Iniciar Projeto →
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex lg:hidden items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#467978]"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
          style={{
            color: C.textPrimary,
            backgroundColor: 'transparent',
            border: 'none',
            width: '44px',
            height: '44px',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <span aria-hidden="true" style={{ display: 'grid', gap: '5px' }}>
            <span style={{ display: 'block', width: '18px', height: '1px', backgroundColor: C.turquoise }} />
            <span style={{ display: 'block', width: '12px', height: '1px', marginLeft: '6px', backgroundColor: C.turquoise }} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navegação principal"
          className="fixed inset-0 lg:hidden"
          style={{
            zIndex: 60,
            minHeight: '100svh',
            overflowY: 'auto',
            backgroundColor: C.black,
            color: C.textPrimary,
          }}
        >
          <div
            style={{
              height: '72px',
              padding: `0 ${S.pageGutter}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(244,241,234,0.06)',
            }}
          >
            <img
              src={asteraLogo}
              alt="Astera"
              style={{ display: 'block', width: 'clamp(120px, 12vw, 150px)', height: 'auto' }}
            />

            <button
              ref={closeButtonRef}
              type="button"
              className="flex items-center gap-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#467978]"
              aria-label="Fechar menu de navegação"
              onClick={() => setMenuOpen(false)}
              style={{
                color: C.textPrimary,
                backgroundColor: 'transparent',
                border: 'none',
                padding: '10px 0 10px 10px',
                fontFamily: F.interface,
                fontSize: '0.64rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Fechar
              <span aria-hidden="true" style={{ position: 'relative', width: '16px', height: '16px' }}>
                <span
                  style={{
                    position: 'absolute',
                    top: '7px',
                    left: 0,
                    width: '16px',
                    height: '1px',
                    backgroundColor: C.turquoise,
                    transform: 'rotate(45deg)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '7px',
                    left: 0,
                    width: '16px',
                    height: '1px',
                    backgroundColor: C.turquoise,
                    transform: 'rotate(-45deg)',
                  }}
                />
              </span>
            </button>
          </div>

          <div
            style={{
              minHeight: 'calc(100svh - 72px)',
              padding: `clamp(2rem, 6vh, 4rem) ${S.pageGutter}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(0.5rem, 1.5vh, 1rem)',
              }}
            >
              {NAV_ITEMS.map(item => (
                <NavLink key={item.href} label={item.label} href={item.href} mobile onClick={() => setMenuOpen(false)} />
              ))}
            </div>

            <a
              href={PROJECT_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#467978]"
              style={{
                marginTop: 'clamp(2rem, 5vh, 3.5rem)',
                fontFamily: F.body,
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: C.canvas,
                backgroundColor: C.accentPrimary,
                border: '1px solid transparent',
                padding: '13px 22px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              Iniciar Projeto →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
