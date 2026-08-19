import { C, F } from '@/theme'

export default function OrbitalDiagram() {

  return (
    <svg
      className="orbital-diagram"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={C.turquoise} stopOpacity="0.22" />
          <stop offset="100%" stopColor={C.turquoise} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sphereGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#d0cec8" />
          <stop offset="45%"  stopColor={C.turquoise} />
          <stop offset="100%" stopColor={C.deep} />
        </radialGradient>
        <radialGradient id="orangeGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#f4a87a" />
          <stop offset="100%" stopColor={C.orange} />
        </radialGradient>
        <filter id="glowFx" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="300" cy="300" r="230" fill="url(#ambientGlow)" />

      {/* Static outer rings */}
      <circle cx="300" cy="300" r="278" stroke={C.white} strokeOpacity="0.025" strokeWidth="1" fill="none" strokeDasharray="1 14" />
      <circle cx="300" cy="300" r="248" stroke={C.white} strokeOpacity="0.05"  strokeWidth="0.5" fill="none" />

      {/* Axis guides */}
      <line x1="50"  y1="300" x2="550" y2="300" stroke={C.white} strokeOpacity="0.03" strokeWidth="0.5" />
      <line x1="300" y1="50"  x2="300" y2="550" stroke={C.white} strokeOpacity="0.03" strokeWidth="0.5" />

      {/* Orbital 1 — slow clockwise */}
      <g data-orbit style={{ transformOrigin: '300px 300px', animation: 'spin-orbital 45s linear infinite' }}>
        <ellipse cx="300" cy="300" rx="235" ry="78" stroke={C.turquoise} strokeOpacity="0.28" strokeWidth="0.75" fill="none" />
        <circle cx="535" cy="300" r="7"  fill="url(#orangeGrad)" filter="url(#glowFx)" />
        <circle cx="535" cy="300" r="14" fill="none" stroke={C.orange} strokeOpacity="0.28" strokeWidth="0.75" />
      </g>

      {/* Orbital 2 — tilted, counter-clockwise */}
      <g data-orbit style={{ transformOrigin: '300px 300px', animation: 'spin-orbital 32s linear infinite reverse' }}>
        <ellipse cx="300" cy="300" rx="195" ry="64" stroke={C.turquoise} strokeOpacity="0.2" strokeWidth="0.75" fill="none" transform="rotate(40 300 300)" />
        <circle cx="300" cy="364" r="5"  fill={C.turquoise} filter="url(#subtleGlow)" />
        <circle cx="300" cy="364" r="10" fill="none" stroke={C.turquoise} strokeOpacity="0.35" strokeWidth="0.5" />
      </g>

      {/* Static middle ring */}
      <circle cx="300" cy="300" r="158" stroke={C.white} strokeOpacity="0.06" strokeWidth="0.5" fill="none" />

      {/* Small inner orbital */}
      <g data-orbit style={{ transformOrigin: '300px 300px', animation: 'spin-orbital 22s linear infinite' }}>
        <ellipse cx="300" cy="300" rx="100" ry="38" stroke={C.turquoise} strokeOpacity="0.38" strokeWidth="0.75" fill="none" transform="rotate(-55 300 300)" />
        <circle cx="300" cy="262" r="3.5" fill={C.white} fillOpacity="0.5" />
      </g>

      {/* Technical annotation lines */}
      <line x1="148" y1="158" x2="166" y2="176" stroke={C.turquoise} strokeOpacity="0.45" strokeWidth="0.5" />
      <line x1="148" y1="158" x2="238" y2="158" stroke={C.turquoise} strokeOpacity="0.28" strokeWidth="0.5" />
      <text x="242" y="162" fontSize="7" fill={C.turquoise} fillOpacity="0.55" fontFamily={F.sans} letterSpacing="1.5">SYS</text>

      <line x1="452" y1="445" x2="434" y2="427" stroke={C.turquoise} strokeOpacity="0.45" strokeWidth="0.5" />
      <line x1="452" y1="445" x2="362" y2="445" stroke={C.turquoise} strokeOpacity="0.28" strokeWidth="0.5" />
      <text x="358" y="449" fontSize="7" fill={C.turquoise} fillOpacity="0.55" fontFamily={F.sans} letterSpacing="1.5" textAnchor="end">ORB.02</text>

      <text x="548" y="282" fontSize="7" fill={C.orange} fillOpacity="0.7"  fontFamily={F.sans} letterSpacing="1.5">A.01</text>
      <text x="54"  y="320" fontSize="7" fill={C.turquoise} fillOpacity="0.55" fontFamily={F.sans} letterSpacing="1.5">B.03</text>

      {/* Center sphere */}
      <circle cx="300" cy="300" r="38" fill="url(#sphereGrad)" />
      <circle cx="300" cy="300" r="38" fill="none" stroke={C.white} strokeOpacity="0.1"  strokeWidth="1" />
      <circle cx="300" cy="300" r="49" fill="none" stroke={C.turquoise} strokeOpacity="0.18" strokeWidth="0.5" strokeDasharray="3 8" />
      <ellipse cx="292" cy="288" rx="11" ry="8" fill={C.white} fillOpacity="0.07" transform="rotate(-30 292 288)" />
    </svg>
  )
}
