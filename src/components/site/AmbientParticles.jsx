const particles = [
  { left: '4%', top: '16%', size: 4, delay: '0s', duration: '9s' },
  { left: '8%', top: '38%', size: 5, delay: '0.7s', duration: '10.2s' },
  { left: '12%', top: '54%', size: 3, delay: '1s', duration: '7s' },
  { left: '18%', top: '24%', size: 7, delay: '1.7s', duration: '11.8s' },
  { left: '22%', top: '30%', size: 6, delay: '2.4s', duration: '11s' },
  { left: '31%', top: '72%', size: 4, delay: '0.5s', duration: '8s' },
  { left: '39%', top: '14%', size: 6, delay: '2.1s', duration: '10.3s' },
  { left: '44%', top: '18%', size: 5, delay: '1.8s', duration: '10s' },
  { left: '55%', top: '66%', size: 3, delay: '0.8s', duration: '7.5s' },
  { left: '63%', top: '36%', size: 6, delay: '1.5s', duration: '9.8s' },
  { left: '68%', top: '24%', size: 5, delay: '2.2s', duration: '10.5s' },
  { left: '80%', top: '48%', size: 4, delay: '1.2s', duration: '9.5s' },
  { left: '84%', top: '20%', size: 7, delay: '0.9s', duration: '10.8s' },
  { left: '90%', top: '14%', size: 6, delay: '2.8s', duration: '12s' },
  { left: '93%', top: '76%', size: 3, delay: '0.4s', duration: '8.5s' },
]

export function AmbientParticles() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
        <div className="particle-beam particle-beam-left" />
        <div className="particle-beam particle-beam-right" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_22%)]" />
        {particles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}-${index}`}
            className="particle-dot"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className="particle-web pointer-events-none absolute inset-0 opacity-55" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="particle-links">
          <path d="M40 80 L180 210 L120 430 L240 620" />
          <path d="M1420 100 L1320 260 L1480 460 L1380 720" />
          <path d="M220 140 L420 170 L520 360 L390 510" />
          <path d="M1030 180 L1180 300 L1080 470 L1250 630" />
        </g>
      </svg>
    </>
  )
}
