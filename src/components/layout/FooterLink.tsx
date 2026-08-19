import { useState } from 'react'
import { C, F } from '@/theme'

type FooterLinkProps = {
  label: string
  href: string
}

export function FooterLink({ label, href }: FooterLinkProps) {
  const [h, setH] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ fontFamily: F.body, fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.12em', color: C.textPrimary, opacity: h ? 0.8 : 0.48, textDecoration: 'none', textTransform: 'uppercase', transition: 'opacity 0.3s' }}
    >
      {label}
    </a>
  )
}
