import { useState } from 'react'
import { C, F, M } from '@/theme'

type HoverButtonProps = {
  variant: 'primary' | 'ghost'
  label: string
  large?: boolean
  href?: string
  target?: '_blank'
  rel?: string
}

export default function HoverButton({
  variant,
  label,
  large,
  href,
  target,
  rel,
}: HoverButtonProps) {
  const [hovered, setHovered] = useState(false)

  const pad = large ? '18px 52px' : '14px 36px'
  const fs = large ? '0.8rem' : '0.75rem'

  if (variant === 'primary') {
    const style = {
      backgroundColor: hovered ? C.textPrimary : C.accentPrimary,
      color: C.canvas,
      fontFamily: F.body,
      fontWeight: 600,
      fontSize: fs,
      letterSpacing: '0.16em',
      textTransform: 'uppercase' as const,
      padding: pad,
      border: 'none',
      cursor: 'pointer',
      transition: `background-color ${M.uiFeedback}`,
      display: 'inline-block',
      textDecoration: 'none',
    }

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          style={style}
        >
          {label}
        </a>
      )
    }

    return (
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={style}
      >
        {label}
      </button>
    )
  }

  const ghostStyle = {
    backgroundColor: 'transparent',
    color: hovered ? C.textPrimary : 'rgba(244,241,234,0.68)',
    fontFamily: F.body,
    fontWeight: 500,
    fontSize: fs,
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    padding: large ? '17px 52px' : '13px 36px',
    border: `1px solid ${
      hovered
      ? 'rgba(244,241,234,0.42)'
      : 'rgba(244,241,234,0.18)'
      }`,
    cursor: 'pointer',
    transition: `border-color ${M.uiFeedback}, color ${M.uiFeedback}`,
    display: 'inline-block',
    textDecoration: 'none',
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={ghostStyle}
      >
        {label}
      </a>
    )
  }

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={ghostStyle}
    >
      {label}
    </button>
  )
}
