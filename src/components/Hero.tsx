import { motion, useScroll, useTransform } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.95])
  const bgParallax = useTransform(scrollYProgress, [0, 0.2], [0, 80])

  return (
    <motion.div
      className="section-inner"
      style={{
        opacity: heroOpacity,
        scale: heroScale,
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
      }}
    >
      {/* Hero background image */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: bgParallax,
          opacity: 0.25,
        }}
      >
        <img
          src="/src/assets/hero-bg.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,8,12,0.3) 0%, rgba(8,8,12,0.7) 50%, rgba(8,8,12,1) 100%)',
        }} />
      </motion.div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, paddingLeft: 60 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ color: '#b85a3a', fontSize: 14, letterSpacing: 6, marginBottom: 24, textTransform: 'uppercase' }}
        >
          {portfolio.subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: 'clamp(56px, 8vw, 120px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 32,
          }}
        >
          <span style={{ color: '#e8e6e3' }}>{portfolio.tagline}</span>
          <br />
          <span style={{ color: '#b85a3a' }}>{portfolio.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ color: '#8a8a92', fontSize: 16, lineHeight: 1.8, maxWidth: 600, marginBottom: 48 }}
        >
          {portfolio.education}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ display: 'flex', gap: 16 }}
        >
          <span
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              background: '#b85a3a',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: 1,
              transition: 'background 0.2s',
            }}
          >
            查看作品 →
          </span>
          <span
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              background: 'transparent',
              color: '#e8e6e3',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: 1,
              transition: 'all 0.2s',
            }}
          >
            联系我
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: '#6a6a72',
          fontSize: 11,
          letterSpacing: 3,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 1, height: 30, background: '#b85a3a' }}
        />
        向下滚动
      </motion.div>
    </motion.div>
  )
}
