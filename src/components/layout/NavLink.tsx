import { useState } from 'react'
import { C, F } from '@/theme'

type NavLinkProps = {
  label: string
  href: string
  mobile?: boolean
  onClick?: () => void
}

export function NavLink({ label, href, mobile = false, onClick }: NavLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        fontFamily: F.sans,
        display: mobile ? 'block' : undefined,
        width: mobile ? 'fit-content' : undefined,
        padding: mobile ? '0.4rem 0' : undefined,
        textAlign: mobile ? 'center' : undefined,
        fontSize: mobile ? 'clamp(1.35rem, 6vw, 2rem)' : '0.72rem',
        fontWeight: 500,
        lineHeight: mobile ? 1.2 : undefined,
        letterSpacing: mobile ? '0.08em' : '0.18em',
        textTransform: 'uppercase',
        color: hovered ? C.accentTechnical : C.white,
        opacity: hovered ? 1 : 0.9,
        transition: 'color .25s ease, opacity .25s ease',
      }}
    >
      {label}
    </a>
  )
}
