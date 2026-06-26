import { portfolio } from '../data/portfolio'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 40px',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
      }}>
        <img
          src="/src/assets/hero-bg.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,8,12,0.4) 0%, rgba(8,8,12,0.8) 50%, rgba(8,8,12,1) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>
        <p style={{
          color: '#b85a3a',
          fontSize: 13,
          letterSpacing: 6,
          marginBottom: 32,
          textTransform: 'uppercase',
          fontFamily: "'Noto Sans SC', sans-serif",
          fontWeight: 300,
        }}>
          {portfolio.subtitle}
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(56px, 10vw, 120px)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#e8e4dc',
          marginBottom: 24,
          letterSpacing: -2,
        }}>
          {portfolio.tagline}
        </h1>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(20px, 2.5vw, 36px)',
          fontWeight: 400,
          color: '#b85a3a',
          fontStyle: 'italic',
          marginBottom: 48,
        }}>
          {portfolio.name}
        </p>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: '#5a5a62', fontSize: 11, letterSpacing: 3,
      }}>
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, #b85a3a, transparent)',
          animation: 'scrollDown 2s ease infinite',
        }} />
        <style>{`@keyframes scrollDown { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
        SCROLL
      </div>
    </section>
  )
}
